import { useState, useEffect, useRef } from 'react';
import Profile from './components/Profile/Profile';
import RandomQuote from './components/RandomQuote';
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

  const recordsPerPage = 20;

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

  export default App;
      setLoadingProfiles(true);
      try {
        const promises = filenames.map((file, index) =>
          fetchData(`/data/${file}`).then((data) => ({ ...data, id: index + 1, fileName: file.replace('.json', '') })),
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
    if (!str) return ''; // Return an empty string if str is undefined or null
    return str
      .toLowerCase()
      .replace(/\s*,\s*/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const handleSearch = ({ value, criteria }) => {
    const normalizedValue = normalizeString(value);

    if (criteria !== 'skill') {
      const filteredResults = combinedData.filter((user) => {
        if (criteria === 'name') {
          return normalizeString(user.name).includes(normalizedValue);
        } else if (criteria === 'location') {
          return normalizeString(user.location).includes(normalizedValue);
        }
        return false;
      });

      setProfiles(filteredResults);
    } else if (criteria === 'skill') {
      if (value.length > 0) {
        const setOfSearchSkills = new Set(value.map((skill) => skill.toLowerCase()));
        const filteredUsers = shuffledProfiles.filter((user) =>
          user.skills.some((skill) => setOfSearchSkills.has(skill.toLowerCase())),
        );
        setProfiles(filteredUsers);
      } else {
        setProfiles(shuffledProfiles);
      }
    } else {
      setProfiles([]);
    }

    setSearching(true);
  };

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
    profilesRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

  if (currentUrl === '/') {
    return (
      <div className="App flex flex-col bg-primaryColor dark:bg-secondaryColor md:flex-row">
        <Sidebar />
        <div className="main-content">
          <RandomQuote />
          <Search onSearch={handleSearch} searching={searching} setSearching={setSearching} />
          {searching ? (
            <ProfileSkeleton />
          ) : (
            <Profile
              profiles={profiles}
              loadingProfiles={loadingProfiles}
              profilesRef={profilesRef}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              recordsPerPage={recordsPerPage}
              shuffledProfiles={shuffledProfiles}
              setShuffledProfiles={setShuffledProfiles}
              NoResultFound={NoResultFound}
              Pagination={Pagination}
            />
          )}
        </div>
        {/* <GTranslateLoader /> */}
      </div>
    );
  } else {
    return <ErrorPage />;
  }
}