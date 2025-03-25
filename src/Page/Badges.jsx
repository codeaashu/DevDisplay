const serviceList = [
  {
    title: 'Dev Pioneer',
    description: 'Earn this badge by adding your profile to the DevDisplay platform.',
    imageUrl: '/assets/DevBadges/DevPioneerpng.gif', // Use relative URL
  },
  {
    title: 'Dev Enhancer',
    description: 'Enhance existing features by refining and improving functionalities.',
    imageUrl: '/assets/DevBadges/DevEnhancerpng.gif', // Use relative URL
  },
  {
    title: 'Dev Innovator',
    description: 'Bring innovation to the forefront by adding creative and unique features.',
    imageUrl: '/assets/DevBadges/DevInnovatorpng.gif', // Use relative URL
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
          <div key={title} className="flex items-center justify-between rounded-lg bg-[#0D1B2A] p-6 shadow-lg">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-blue-400">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            {/* Increased GIF Size */}
            <img src={imageUrl} alt={title} className="ml-4 h-36 w-36 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};
