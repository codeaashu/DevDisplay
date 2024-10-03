import React, { useContext } from 'react';
import { FaFrown } from 'react-icons/fa';
import {ThemeContext} from '../../context/ThemeContext'


export default function NoResultFound() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme === "light" ? "flex flex-col items-center justify-center gap-4 p-4 text-center dark:text-white text-black" : "flex flex-col items-center justify-center gap-4 p-4 text-center dark:text-white text-white" }>
      <FaFrown className="text-7xl" />
       <div>
         <p className="text-2xl font-bold">No Results Found</p>
         <p>We couldn't find any results for your search.</p>
       </div>
    </div>
  );
}
