import styled from 'styled-components';

const StyledDot = styled.div`
  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }
`;

// Sample data for serviceList
const serviceList = [
  {
    imageUrl: '/assets/DevBadges/DevPioneerpng.gif',
    title: 'Dev Pioneer',
    description: 'Earn this badge by adding your profile to the DevDisplay platform.',
  },
  {
    imageUrl: '/assets/DevBadges/DevEnhancerpng.gif',
    title: 'Dev Enhancer',
    description: 'Enhance existing features by refining and improving functionalities.',
  },
  {
    imageUrl: '/assets/DevBadges/DevInnovatorpng.gif',
    title: 'Dev Innovator',
    description: 'Bring innovation to the forefront by adding creative and unique features.',
  },
];

export const Badges = () => {
  return (
    <section className="py-18 container max-w-[90%] sm:py-20">
      {/* Centered Heading */}
      <div className="flex justify-center">
        <h2 className="custom-font my-4 text-center text-4xl font-bold text-[#00a6fb]">Contributor Badges</h2>
      </div>

      {/* Centered Subtext with More Space */}
      <div className="mb-6 mt-4 flex flex-col items-center">
        <p className="max-w-2xl text-center text-lg text-gray-400">
          These badges recognize the dedication and contributions of developers within the DevDisplay community.
        </p>
      </div>

      {/* Cards Section with Larger GIFs */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {serviceList.map(({ imageUrl, title, description }) => (
          <StyledDot key={title}>
            <div className="to-[rgba(0, 43, 62, 0.6)] group relative block flex h-full items-center justify-between rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg text-blue-400">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
              </div>
              {/* Increased GIF Size */}
              <img src={imageUrl} alt={title} className="ml-4 h-36 w-36 object-contain" />
              {/* Animated Dot */}
              <div className="dot" />
            </div>
          </StyledDot>
        ))}
      </div>
    </section>
  );
};
