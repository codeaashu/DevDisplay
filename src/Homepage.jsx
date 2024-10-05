import { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Profile from './components/Profile/Profile';
import ProfileSkeleton from './components/ProfileSkeleton/ProfileSkeleton';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NoResultFound from './components/NoResultFound/NoResultFound';
import Loader from './components/Loader/Loader';
import './App.css';
import filenames from './ProfilesList.json';

function App() {
  const profilesRef = useRef();
  const [profiles, setProfiles] = useState([]);
  const [displayedProfiles, setDisplayedProfiles] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const recordsPerPage = 5;

  const currentUrl = window.location.pathname;

  useEffect(() => {
    const fetchData = async (file) => {
      try {
        const response = await fetch(file);
        return await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };

    const combineData = async () => {
      setLoadingProfiles(true);
      try {
        const promises = filenames.map((file) => fetchData(`/data/${file}`));
        const combinedData = await Promise.all(promises);
        setProfiles(combinedData.flat());
        setDisplayedProfiles(combinedData.flat().slice(0, recordsPerPage));
      } catch (error) {
        console.error('Error combining data:', error);
        setProfiles([]);
        setDisplayedProfiles([]);
      }
      setLoadingProfiles(false);
    };

    combineData();
  }, []);

  const loadMoreProfiles = () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);

    const currentLength = displayedProfiles.length;
    const moreProfiles = profiles.slice(currentLength, currentLength + recordsPerPage);

    if (moreProfiles.length > 0) {
      setDisplayedProfiles((prev) => [...prev, ...moreProfiles]);
    } else {
      setHasMore(false);
    }

    setLoadingMore(false);
  };

  const handleSearch = ({ value, criteria }) => {
    const normalizeString = (str) =>
      str
        .toLowerCase()
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const normalizedValue = normalizeString(value);

    const filteredResults = profiles.filter((user) => {
      if (criteria === 'name') {
        return normalizeString(user.name).includes(normalizedValue);
      } else if (criteria === 'location') {
        return normalizeString(user.location).includes(normalizedValue);
      } else if (criteria === 'skill') {
        return user.skills.some((skill) => normalizeString(skill).includes(normalizedValue));
      }
      return false;
    });

    setDisplayedProfiles(filteredResults.slice(0, recordsPerPage));
    setHasMore(filteredResults.length > recordsPerPage);
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

    if (displayedProfiles.length === 0) {
      return <NoResultFound />;
    }

    return displayedProfiles.map((currentRecord, index) => <Profile data={currentRecord} key={index} />);
  };

  return currentUrl === '/' ? (
    <div className="App flex flex-col bg-primaryColor dark:bg-secondaryColor md:flex-row">
      <Sidebar />
      <div className="w-full pl-5 pr-4 md:h-screen md:w-[77%] md:overflow-y-scroll md:py-7" ref={profilesRef}>
        <Search onSearch={handleSearch} />
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreProfiles}
          hasMore={hasMore && !loadingProfiles}
          loader={<Loader key="loading" />}
          useWindow={false}
        >
          {renderProfiles()}
          {loadingMore && <Loader />}
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
}

export default App;
