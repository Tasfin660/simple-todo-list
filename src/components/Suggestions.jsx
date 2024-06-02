import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

export default function Suggestions({ pause, onSuggestions }) {
  return (
    <button
      className={`box-shadow flex w-[150px] items-center justify-center gap-2 rounded-full bg-white font-medium text-sky-500 duration-200 hover:gap-3 disabled:gap-2 ${pause ? 'cursor-wait' : 'cursor-pointer'}`}
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
