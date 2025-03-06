import React from 'react';
import styled from 'styled-components';

const ProfileSkeletonWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

  font-family: 'Merriweather Sans', sans-serif;

  .skeleton {
    background-color: rgb(13, 25, 53);
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

function ProfileSkeleton() {
  const skeletonData = {
    name: '',
    location: '',
    bio: '',
    avatar: '',
    portfolio: '',
    skills: ['', '', '', ''],
    social: {
      GitHub: '',
      Twitter: '',
      LinkedIn: '',
      Instagram: '',
      Email: '',
    },
    verified: false,
  };

  return (
    <ProfileSkeletonWrapper>
      <div className="font-MerriweatherSans-Light mb-[1.5rem] h-auto rounded-[10px] pb-[0rem] pl-[1rem] pr-[1rem] pt-[1rem] shadow-lg">
        <div className="flex gap-[1rem]">
          <div className="skeleton h-[6.1rem] w-[6.1rem] flex-shrink-0 rounded"></div>
          <div className="w-[80%] overflow-hidden">
            <h3 className="skeleton mb-[0.5rem] h-[1.6rem] w-full rounded-[0.25rem]">
              {skeletonData.name}
              {skeletonData.verified && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  style={{ marginLeft: '8px' }}
                >
                  <circle cx="12" cy="12" r="10" fill="rgb(24, 186, 255)" />
                  <path fill="#fff" d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                </svg>
              )}
            </h3>
            <p className="skeleton mb-[0.4rem] h-[1.2rem] w-full rounded-[0.25rem]">{skeletonData.location}</p>
            <div className="flex gap-[1rem] overflow-hidden">
              {skeletonData.skills &&
                skeletonData.skills.map((skill, index) => {
                  return (
                    <div className="skeleton h-[2rem] w-full rounded-[0.25rem]" key={index}>
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="w-[10%] justify-end overflow-hidden">
            <div className="skeleton mb-[0.5rem] h-[6rem] w-[4rem] rounded-[0.25rem]"></div>
          </div>
        </div>
        <div className="mt-[1rem]">
          <div className="skeleton mb-[0.4rem] h-[1.2rem] w-full rounded-[0.25rem]">{skeletonData.bio}</div>
          <div className="mt-[0.5rem] flex h-[3rem] gap-[1rem]">
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
            <div className="skeleton mt-[0.4rem] flex h-[2rem] w-[2rem] rounded-[0.25rem]">
              {skeletonData.social.GitHub}
            </div>
          </div>
        </div>
      </div>
    </ProfileSkeletonWrapper>
  );
}

export default ProfileSkeleton;
