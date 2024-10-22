import React, { useState, useRef, useEffect } from 'react';
import useDebounce from '../../hooks/useDebouncer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const searchInput = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [skills, setSkills] = useState([
    'React',
    'Redux',
    'HTML',
    'CSS',
    'Tailwind',
    'Django',
    'TypeScript',
    'Figma',
    'UI',
    'UX',
    'C',
    'C++',
    'JavaScript',
    'Python',
    'Java',
    'Web Development',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'Machine Learning',
    'Deep Learning',
    'Flutter',
    'Hugging Face',
    'NLP',
    'REST APIs',
    'GraphQL',
    'Docker',
    'Kubernetes',
    'Firebase',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Node.js',
    'Express.js',
    'Git',
    'GitHub',
    'TensorFlow',
    'PyTorch',
    'Azure',
    'AWS',
    'Google Cloud',
    'Linux',
    'Cybersecurity',
    'Microservices',
    'Blockchain',
    'Jenkins',
    'CI/CD',
    'TDD',
    'Agile Methodologies',
    'Data Structures',
    'Algorithms',
    'Computer Vision',
    'Natural Language Processing',
    'UI Design',
    'UX Design',
    'Cloud Computing',
    'Socket Programming',
    'Data Mining',
  ]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
    setSearchValue('');
  };

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedValue !== prevSearchValue) {
      onSearch({ value: debouncedValue, criteria: searchCriteria });
      setPrevSearchValue(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleSearch = () => {
    if (searchValue !== prevSearchValue) {
      onSearch({ value: searchValue, criteria: searchCriteria });
      setPrevSearchValue(searchValue);
    }
  };

  const handleSearchOnEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleDeleteButtonClick = () => {
    if (searchValue) {
      setSearchValue('');
      setPrevSearchValue('');
      onSearch({ value: '', criteria: searchCriteria });
      searchInput.current.focus();
    }
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchValue(transcript);
        handleSearch();
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  return (
    <div className="relative flex items-center justify-end space-x-4 pb-6">
      <select
        className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight h-12 rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-3 text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
        value={searchCriteria}
        onChange={handleCriteriaChange}
      >
        <option value="name">Name</option>
        <option value="location">Location</option>
        <option value="skill">Skill</option>
      </select>
      <div className="relative w-full">
        {searchCriteria === 'skill' ? (
          <select
            className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight h-12 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-3 pr-12 font-spaceMono text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          >
            <option value="">Select a skill</option>
            {skills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight h-12 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-3 pr-12 font-spaceMono text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            ref={searchInput}
            type="text"
            onChange={handleInputChange}
            value={searchValue}
            placeholder={`Search user by ${searchCriteria}`}
            onKeyDown={handleSearchOnEnter}
          />
        )}
        {searchValue ? (
          <FontAwesomeIcon
            onClick={handleDeleteButtonClick}
            className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-12 top-1/2 -translate-y-1/2 scale-125 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleSearchButtonClick}
            className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-12 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
            icon={faMagnifyingGlass}
          />
        )}
        <FontAwesomeIcon
          onClick={handleVoiceSearch}
          className={`hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl ${
            isListening ? 'text-red-500' : 'text-secondaryColor dark:text-white'
          }`}
          icon={faMicrophone}
        />
      </div>
    </div>
  );
}

export default Search;
