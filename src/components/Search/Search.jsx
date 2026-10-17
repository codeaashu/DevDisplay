import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebouncer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import VoiceSearch from './VoiceSearch';
import { FaUsers } from 'react-icons/fa';
import filenames from '../../ProfilesList.json';

const totalDevelopers = filenames.length;

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
                <svg className="dash_x_badge ml-1.5" viewBox="0 0 22 22" aria-label="X Premium verified" role="img">
                  <path
                    fill="#00a6fb"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  />
                </svg>
              </div>
              <div className="user-id">@devpioneer</div>
            </div>
          </button>
        </a>
        <div className="developers-count">
          <FaUsers className="developers-count-icon" />
          <span>{totalDevelopers} OS Developers</span>
        </div>
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
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;

  .developers-count {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 34px;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color, rgb(24, 186, 255));
    background-color: rgba(20, 29, 47, 1);
    border: 1px solid rgb(24, 186, 255);
    border-radius: 68px;
    box-shadow:
      0 0 2.17382px rgba(0, 0, 0, 0.049),
      0 1.75px 6.01034px rgba(0, 0, 0, 0.07),
      0 3.63px 14.4706px rgba(0, 0, 0, 0.091),
      0 22px 48px rgba(0, 0, 0, 0.14);
    white-space: nowrap;
  }

  .developers-count-icon {
    font-size: 12px;
  }

  #btn-message {
    --text-color: rgb(24, 186, 255);
    --bg-color-sup: rgb(255, 255, 255);
    --bg-color: rgba(20, 29, 47, 1);
    --bg-hover-color: rgba(20, 29, 47, 1);
    --online-status: rgb(24, 186, 255);
    --font-size: 14px;
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
    padding: 5px 10px 5px 5px;
    width: fit-content;
    height: 34px;
    border: 1px solid rgb(24, 186, 255); /* Thin border */
    overflow: hidden;
    position: relative;
    transition: var(--btn-transition);
  }

  .button-message:hover {
    height: 48px;
    padding: 7px 16px 7px 7px;
    background-color: var(--bg-hover-color);
    transition: var(--btn-transition);
  }

  .button-message:active {
    transform: scale(0.99);
  }

  .content-avatar {
    width: 24px;
    height: 24px;
    margin: 0;
    transition: var(--btn-transition);
    position: relative;
  }

  .button-message:hover .content-avatar {
    width: 32px;
    height: 32px;
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
    white-space: nowrap;
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
  @media (max-width: 640px) {
    gap: 8px;

    #btn-message {
      --font-size: 11px;
    }

    .button-message {
      height: 30px;
      padding: 4px 8px 4px 4px;
    }

    .content-avatar {
      width: 20px;
      height: 20px;
    }

    .developers-count {
      height: 30px;
      padding: 4px 10px;
      font-size: 11px;
      gap: 5px;
    }

    .developers-count-icon {
      font-size: 10px;
    }
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
