import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export default function ShowMore({ handleMaxOutput }) {
  const [isFull, setIsFull] = useState(false);
  let hoverClass;
  isFull
    ? (hoverClass = 'hover:-translate-y-2')
    : (hoverClass = 'hover:translate-y-2');

  function handleShowMore() {
    if (isFull) handleMaxOutput(5);
    else handleMaxOutput(9999);
    setIsFull(!isFull);
  }
  return (
    <button
      className={`box-shadow mb-16 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sky-500 dark:text-sky-600 ${hoverClass} !duration-200`}
      onClick={handleShowMore}
    >
      {isFull ? (
        <IoIosArrowUp className="text-xl" />
      ) : (
        <IoIosArrowDown className="text-xl" />
      )}
      <p className="text-lg">{isFull ? 'Show Less' : 'Show More'}</p>
    </button>
  );
}
ShowMore.propTypes = {
  handleMaxOutput: PropTypes.func,
};
