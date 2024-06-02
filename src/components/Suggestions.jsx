import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

export default function Suggestions({ pause, onSuggestions }) {
  return (
    <button
      className={`box-shadow flex w-[150px] items-center justify-center gap-2 rounded-full bg-white py-3 font-medium text-sky-500 duration-200 hover:gap-3 disabled:gap-2 dark:text-sky-600 max-[1280px]:justify-self-end max-[800px]:p-2 max-[400px]:justify-self-center max-[400px]:text-sm ${pause ? 'cursor-wait' : 'cursor-pointer'}`}
      onClick={onSuggestions}
      disabled={pause}
    >
      <FaPlus />
      <p>Suggestions</p>
    </button>
  );
}
Suggestions.propTypes = {
  pause: PropTypes.bool,
  onSuggestions: PropTypes.func,
};
