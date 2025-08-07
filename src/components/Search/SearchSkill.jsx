import { FaTimes } from 'react-icons/fa';

//it is the design of each skill box
export default function SearchSkill({ skill, setSearchSkills }) {
  const handleRemoveSkill = (value) => {
    setSearchSkills((prev) => {
      return prev.filter((prevSkill) => prevSkill !== skill);
    });
  };

  return (
    <div className="m-2 flex flex-row items-center rounded-md border-2 border-[#00A6FB] bg-[#00A6FB] p-2 text-black transition-colors duration-1000 ease-in-out hover:bg-white hover:text-[#00A6FB] dark:text-white dark:hover:bg-[#141D2F]">
      <p className="mr-4">{skill}</p>
      <FaTimes
        onClick={() => {
          handleRemoveSkill(skill);
        }}
      />
    </div>
  );
}
