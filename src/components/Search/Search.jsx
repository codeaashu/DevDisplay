import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebouncer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import VoiceSearch from './VoiceSearch';
import { FaCheckCircle } from 'react-icons/fa';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const searchInput = useRef(null);

  //voice search
  const [voiceText, setVoiceText] = useState(''); // to store recognized text
  const [isListening, setIsListening] = useState(false); // to toggle listening state

  useEffect(() => {
    setSearchValue(voiceText);
  }, [voiceText]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
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

  return (
    <div className="relative pb-6">
      <StyledWrapper className="mb-4">
        <a
          href="https://github.com/codeaashu/DevDisplay/blob/main/contribution/Profile.md#-add-your-profile-on-devdisplay-"
          target="_blank"
          rel="noreferrer"
        >
          <button id="btn-message" className="button-message">
            <div className="content-avatar">
              <div className="status-user" />
              <div className="avatar">
                <svg className="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z" />
                </svg>
              </div>
            </div>
            <div className="notice-content">
              <div className="username">Dev Pioneer</div>
              <div className="lable-message">
                Add Your Profile
                <FaCheckCircle className="ml-2 rounded-full border-[1px] border-[#0ea5e9] p-0.5 text-xl text-[#0ea5e9]" />
              </div>
              <div className="user-id">@devpioneer</div>
            </div>
          </button>
        </a>
      </StyledWrapper>
      <div className="relative flex items-center justify-end space-x-4">
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
          <input
            className="focus:border-primaryFocus focus:bg-primaryLight dark:focus:border-secondaryFocus dark:focus:bg-secondaryLight h-12 w-full rounded-lg border-2 border-borderSecondary bg-primaryColor px-4 py-3 pr-20 font-spaceMono text-base text-secondaryColor outline-none dark:border-borderColor dark:bg-secondaryColor dark:text-white"
            ref={searchInput}
            type="text"
            onChange={handleInputChange}
            value={searchValue}
            placeholder={`Search user by ${searchCriteria}`}
            onKeyDown={handleSearchOnEnter}
          />
          {searchValue ? (
            <FontAwesomeIcon
              onClick={handleDeleteButtonClick}
              className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-4 top-1/2 -translate-y-1/2 scale-125 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
              icon={faXmark}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleSearchButtonClick}
              className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
              icon={faMagnifyingGlass}
            />
          )}
          {/* <FontAwesomeIcon
            onClick={() => setIsListening((prev) => !prev)}
            className="hover:text-primaryFocus dark:hover:text-secondaryFocus absolute right-12 top-1/2 -translate-y-1/2 transform cursor-pointer text-xl text-secondaryColor dark:text-white"
            icon={faMicrophone}
          /> */}
        </div>
      </div>

      <VoiceSearch setVoiceText={setVoiceText} isListening={isListening} setIsListening={setIsListening} />
    </div>
  );
}

const StyledWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

  font-family: 'Merriweather Sans', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  #btn-message {
    --text-color: rgb(24, 186, 255);
    --bg-color-sup: rgb(255, 255, 255);
    --bg-color: rgba(20, 29, 47, 1);
    --bg-hover-color: rgba(20, 29, 47, 1);
    --online-status: rgb(24, 186, 255);
    --font-size: 16px;
    --btn-transition: all 0.2s ease-out;
  }

  .button-message {
    display: flex;
    justify-content: center;
    align-items: center;
    font:
      400 var(--font-size) 'Merriweather Sans',
      sans-serif;
    box-shadow:
      0 0 2.17382px rgba(0, 0, 0, 0.049),
      0 1.75px 6.01034px rgba(0, 0, 0, 0.07),
      0 3.63px 14.4706px rgba(0, 0, 0, 0.091),
      0 22px 48px rgba(0, 0, 0, 0.14);
    background-color: var(--bg-color);
    border-radius: 68px;
    cursor: pointer;
    padding: 6px 10px 6px 6px;
    width: fit-content;
    height: 40px;
    border: 1px solid rgb(24, 186, 255); /* Thin border */
    overflow: hidden;
    position: relative;
    transition: var(--btn-transition);
  }

  .button-message:hover {
    height: 56px;
    padding: 8px 20px 8px 8px;
    background-color: var(--bg-hover-color);
    transition: var(--btn-transition);
  }

  .button-message:active {
    transform: scale(0.99);
  }

  .content-avatar {
    width: 30px;
    height: 30px;
    margin: 0;
    transition: var(--btn-transition);
    position: relative;
  }

  .button-message:hover .content-avatar {
    width: 40px;
    height: 40px;
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--bg-color-sup);
  }

  .user-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .status-user {
    position: absolute;
    width: 6px;
    height: 6px;
    right: 1px;
    bottom: 1px;
    border-radius: 50%;
    outline: solid 2px var(--bg-color);
    background-color: var(--online-status);
    transition: var(--btn-transition);
    animation: active-status 2s ease-in-out infinite;
  }

  .button-message:hover .status-user {
    width: 10px;
    height: 10px;
    right: 1px;
    bottom: 1px;
    outline: solid 3px var(--bg-hover-color);
  }

  .notice-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 8px;
    text-align: initial;
    color: var(--text-color);
  }

  .username {
    letter-spacing: -6px;
    height: 0;
    opacity: 0;
    transform: translateY(-20px);
    transition: var(--btn-transition);
  }

  .user-id {
    font-size: 12px;
    letter-spacing: -6px;
    height: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: var(--btn-transition);
  }

  .lable-message {
    display: flex;
    align-items: center;
    opacity: 1;
    transform: scaleY(1);
    transition: var(--btn-transition);
  }

  .button-message:hover .username {
    height: auto;
    letter-spacing: normal;
    opacity: 1;
    transform: translateY(0);
    transition: var(--btn-transition);
  }

  .button-message:hover .user-id {
    height: auto;
    letter-spacing: normal;
    opacity: 1;
    transform: translateY(0);
    transition: var(--btn-transition);
  }

  .button-message:hover .lable-message {
    height: 0;
    transform: scaleY(0);
    transition: var(--btn-transition);
  }

  .lable-message,
  .username {
    font-weight: 600;
  }

  .number-message {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 8px;
    font-size: 12px;
    width: 16px;
    height: 16px;
    background-color: var(--bg-color-sup);
    border-radius: 20px;
  }

  /*==============================================*/
  @keyframes active-status {
    0% {
      background-color: var(--online-status);
    }

    33.33% {
      background-color: rgb(24, 186, 255);
    }

    66.33% {
      background-color: rgba(20, 29, 47, 1);
    }

    100% {
      background-color: var(--online-status);
    }
  }
`;

export default Search;
