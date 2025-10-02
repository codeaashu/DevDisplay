import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import Profile from './components/Profile/Profile';
import ProfileSkeleton from './components/ProfileSkeleton/ProfileSkeleton';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NoResultFound from './components/NoResultFound/NoResultFound';
import Pagination from './components/Pagination/Pagination';
import './App.css';
import filenames from './ProfilesList.json';
// import GTranslateLoader from './components/GTranslateLoader';

function App() {
  const profilesRef = useRef();
  const [profiles, setProfiles] = useState([]);
  const [searching, setSearching] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');

  const recordsPerPage = 20;

  // Enhanced search configuration - optimized for name typos
  const fuseOptions = useMemo(
    () => ({
      keys: [
        { name: 'name', weight: 0.5 }, // Higher weight for names
        { name: 'location', weight: 0.15 },
        { name: 'skills', weight: 0.2 },
        { name: 'social.GitHub', weight: 0.05 },
        { name: 'social.Twitter', weight: 0.05 },
        { name: 'social.LinkedIn', weight: 0.05 },
        { name: 'social.Email', weight: 0.05 },
        { name: 'bio', weight: 0.05 },
      ],
      threshold: 0.4, // More lenient threshold for name typos
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 1,
      ignoreLocation: true,
      findAllMatches: true,
      shouldSort: true,
    }),
    [],
  );

  // Name-specific search configuration for better typo tolerance
  const nameFuseOptions = useMemo(
    () => ({
      keys: [{ name: 'name', weight: 1.0 }],
      threshold: 0.2, // Much more lenient for name typos (lower = more forgiving)
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 1,
      ignoreLocation: true,
      findAllMatches: true,
      shouldSort: true,
      // Additional options for better typo tolerance
      distance: 100, // Maximum distance for fuzzy matching
      useExtendedSearch: true,
    }),
    [],
  );

  // Initialize Fuse.js instance
  const fuse = useMemo(() => {
    if (combinedData.length === 0) return null;
    return new Fuse(combinedData, fuseOptions);
  }, [combinedData, fuseOptions]);

  // Initialize name-specific Fuse.js instance
  const nameFuse = useMemo(() => {
    if (combinedData.length === 0) return null;
    return new Fuse(combinedData, nameFuseOptions);
  }, [combinedData, nameFuseOptions]);

  const currentUrl = window.location.pathname;

  useEffect(() => {
    const fetchData = async (file) => {
      try {
        const response = await fetch(file);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };

    const combineData = async () => {
      setLoadingProfiles(true);
      try {
        const promises = filenames.map((file, index) =>
          fetchData(`/data/${file}`).then((data) => ({
            ...data,
            id: index + 1,
            fileName: file.replace('.json', ''),
            // Add searchable social media fields
            searchableSocial: {
              github: data.social?.GitHub?.split('/').pop() || '',
              twitter: data.social?.Twitter?.split('/').pop() || '',
              linkedin: data.social?.LinkedIn?.split('/').pop() || '',
            },
          })),
        );
        const combinedData = await Promise.all(promises);
        const flattenedData = combinedData.flat();
        setCombinedData(flattenedData);
        setShuffledProfiles(shuffleProfiles(flattenedData));
      } catch (error) {
        console.error('Error combining data:', error);
        setCombinedData([]);
        setShuffledProfiles([]);
      }
      setLoadingProfiles(false);
    };

    combineData();
  }, []);

  const shuffleProfiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const normalizeString = (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/\s*,\s*/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Simple string similarity function for name matching
  const calculateSimilarity = (str1, str2) => {
    const s1 = normalizeString(str1);
    const s2 = normalizeString(str2);

    if (s1 === s2) return 1;
    if (s1.includes(s2) || s2.includes(s1)) return 0.8;

    // Simple Levenshtein distance-based similarity
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;

    if (longer.length === 0) return 1;

    const distance = levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  };

  const levenshteinDistance = (str1, str2) => {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
        }
      }
    }
    return matrix[str2.length][str1.length];
  };

  // Enhanced search with fuzzy matching and multiple criteria
  const handleSearch = useCallback(
    ({ value, criteria }) => {
      if (currentPage !== 1) setCurrentPage(1);

      setSearchQuery(value);
      setSearchCriteria(criteria);

      if (!value.trim()) {
        setProfiles([]);
        setSearching(false);
        return;
      }

      let filteredResults = [];

      if (criteria === 'all') {
        // Use Fuse.js for fuzzy search across all fields
        if (fuse) {
          const fuseResults = fuse.search(value);
          filteredResults = fuseResults.map((result) => result.item);

          // If no fuzzy results, try exact matches as fallback
          if (filteredResults.length === 0) {
            filteredResults = combinedData.filter((user) => {
              const searchFields = [
                user.name,
                user.location,
                user.bio,
                ...(user.skills || []),
                user.social?.GitHub,
                user.social?.Twitter,
                user.social?.LinkedIn,
                user.social?.Email,
                // Also search social media usernames
                user.social?.GitHub?.split('/').pop(),
                user.social?.Twitter?.split('/').pop(),
                user.social?.LinkedIn?.split('/').pop(),
              ].filter(Boolean);

              return searchFields.some((field) => normalizeString(field).includes(normalizeString(value)));
            });
          }
        } else {
          // Fallback to basic search
          filteredResults = combinedData.filter((user) => {
            const searchFields = [
              user.name,
              user.location,
              user.bio,
              ...(user.skills || []),
              user.social?.GitHub,
              user.social?.Twitter,
              user.social?.LinkedIn,
              user.social?.Email,
              // Also search social media usernames
              user.social?.GitHub?.split('/').pop(),
              user.social?.Twitter?.split('/').pop(),
              user.social?.LinkedIn?.split('/').pop(),
            ].filter(Boolean);

            return searchFields.some((field) => normalizeString(field).includes(normalizeString(value)));
          });
        }
      } else if (criteria === 'name') {
        // Enhanced name search with fuzzy matching - optimized for typos
        if (nameFuse) {
          const fuseResults = nameFuse.search(value);
          console.log('Name search results:', fuseResults); // Debug log
          filteredResults = fuseResults.map((result) => result.item);

          // Fallback to exact match if no fuzzy results
          if (filteredResults.length === 0) {
            console.log('No fuzzy results, trying exact match'); // Debug log
            filteredResults = combinedData.filter((user) =>
              normalizeString(user.name).includes(normalizeString(value)),
            );
          }

          // Additional fallback using similarity function
          if (filteredResults.length === 0) {
            console.log('No exact matches, trying similarity search'); // Debug log
            filteredResults = combinedData.filter((user) => {
              const similarity = calculateSimilarity(user.name, value);
              console.log(`Similarity between "${user.name}" and "${value}": ${similarity}`);
              return similarity > 0.6; // 60% similarity threshold
            });
          }
        } else {
          console.log('No nameFuse available, using exact match'); // Debug log
          filteredResults = combinedData.filter((user) => normalizeString(user.name).includes(normalizeString(value)));

          // Fallback to similarity search if no exact matches
          if (filteredResults.length === 0) {
            console.log('No exact matches, trying similarity search'); // Debug log
            filteredResults = combinedData.filter((user) => {
              const similarity = calculateSimilarity(user.name, value);
              console.log(`Similarity between "${user.name}" and "${value}": ${similarity}`);
              return similarity > 0.6; // 60% similarity threshold
            });
          }
        }
      } else if (criteria === 'location') {
        // Enhanced location search with fuzzy matching
        if (fuse) {
          const locationFuse = new Fuse(combinedData, {
            keys: ['location'],
            threshold: 0.3,
            includeScore: true,
          });
          const fuseResults = locationFuse.search(value);
          filteredResults = fuseResults.map((result) => result.item);

          // Fallback to exact match if no fuzzy results
          if (filteredResults.length === 0) {
            filteredResults = combinedData.filter((user) => {
              return normalizeString(user.location).includes(normalizeString(value));
            });
          }
        } else {
          filteredResults = combinedData.filter((user) => {
            return normalizeString(user.location).includes(normalizeString(value));
          });
        }
      } else if (criteria === 'skill') {
        // Enhanced skill search with fuzzy matching
        const searchSkills = value
          .toLowerCase()
          .split(',')
          .map((skill) => skill.trim())
          .filter((skill) => skill.length > 0);

        if (fuse) {
          const skillFuse = new Fuse(combinedData, {
            keys: ['skills'],
            threshold: 0.3,
            includeScore: true,
          });

          // Try fuzzy search for each skill
          const fuzzyResults = [];
          for (const skill of searchSkills) {
            const results = skillFuse.search(skill);
            fuzzyResults.push(...results.map((result) => result.item));
          }

          // Remove duplicates
          const uniqueResults = fuzzyResults.filter(
            (item, index, self) => index === self.findIndex((t) => t.id === item.id),
          );

          filteredResults = uniqueResults;

          // Fallback to exact match if no fuzzy results
          if (filteredResults.length === 0) {
            const setOfSearchSkills = new Set(searchSkills);
            filteredResults = combinedData.filter((user) =>
              user.skills?.some((skill) => setOfSearchSkills.has(skill.toLowerCase())),
            );
          }
        } else {
          const setOfSearchSkills = new Set(searchSkills);
          filteredResults = combinedData.filter((user) =>
            user.skills?.some((skill) => setOfSearchSkills.has(skill.toLowerCase())),
          );
        }
      }

      // Enhanced sorting by relevance
      filteredResults.sort((a, b) => {
        const searchValue = normalizeString(value);

        // Check for exact matches in name first
        const aNameExact = normalizeString(a.name).includes(searchValue);
        const bNameExact = normalizeString(b.name).includes(searchValue);

        if (aNameExact && !bNameExact) return -1;
        if (!aNameExact && bNameExact) return 1;

        // Check for exact matches in location
        const aLocationExact = normalizeString(a.location).includes(searchValue);
        const bLocationExact = normalizeString(b.location).includes(searchValue);

        if (aLocationExact && !bLocationExact) return -1;
        if (!aLocationExact && bLocationExact) return 1;

        // Check for exact matches in skills
        const aSkillsExact = a.skills?.some((skill) => normalizeString(skill).includes(searchValue));
        const bSkillsExact = b.skills?.some((skill) => normalizeString(skill).includes(searchValue));

        if (aSkillsExact && !bSkillsExact) return -1;
        if (!aSkillsExact && bSkillsExact) return 1;

        // Check for exact matches in social media
        const aSocialExact = [
          a.social?.GitHub,
          a.social?.Twitter,
          a.social?.LinkedIn,
          a.social?.Email,
          a.social?.GitHub?.split('/').pop(),
          a.social?.Twitter?.split('/').pop(),
          a.social?.LinkedIn?.split('/').pop(),
        ]
          .filter(Boolean)
          .some((field) => normalizeString(field).includes(searchValue));

        const bSocialExact = [
          b.social?.GitHub,
          b.social?.Twitter,
          b.social?.LinkedIn,
          b.social?.Email,
          b.social?.GitHub?.split('/').pop(),
          b.social?.Twitter?.split('/').pop(),
          b.social?.LinkedIn?.split('/').pop(),
        ]
          .filter(Boolean)
          .some((field) => normalizeString(field).includes(searchValue));

        if (aSocialExact && !bSocialExact) return -1;
        if (!aSocialExact && bSocialExact) return 1;

        // Finally, sort alphabetically by name
        return a.name.localeCompare(b.name);
      });

      setProfiles(filteredResults);
      setSearching(true);
    },
    [combinedData, fuse, nameFuse, currentPage],
  );

  const handleNextPage = () => {
    const totalPages = Math.ceil((searching ? profiles.length : combinedData.length) / recordsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = profilesRef.current;
    if (scrollContainer) {
      const canScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight + 5; // small tolerance
      if (canScroll) {
        try {
          scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
          scrollContainer.scrollTop = 0;
        }
      } else {
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const getPaginatedData = () => {
    const data = searching ? profiles : shuffledProfiles;
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const renderProfiles = () => {
    if (loadingProfiles) {
      return (
        <>
          {Array(5)
            .fill('profile-skeleton')
            .map((item, index) => (
              <ProfileSkeleton key={index} />
            ))}
        </>
      );
    }
    const paginatedData = getPaginatedData();
    return paginatedData.map((currentRecord, index) => <Profile data={currentRecord} key={index} />);
  };

  return currentUrl === '/' ? (
    <div className="App flex flex-col bg-primaryColor dark:bg-secondaryColor md:flex-row">
      <Sidebar />
      <div className="w-full pl-5 pr-4 md:h-screen md:w-[77%] md:overflow-y-scroll md:py-7" ref={profilesRef}>
        <Search onSearch={handleSearch} />
        {profiles.length === 0 && searching ? <NoResultFound /> : renderProfiles()}
        {combinedData.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil((searching ? profiles.length : shuffledProfiles.length) / recordsPerPage)}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        )}
      </div>
      {/* <GTranslateLoader /> */}
    </div>
  ) : (
    <ErrorPage />
  );
}

export default App;
