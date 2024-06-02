import PropTypes from 'prop-types';

export default function StarButton({ starredTasks, onStarredTasks }) {
  return (
    <button
      className="box-shadow w-[152px] rounded-full bg-sky-700 text-sm text-green-400 duration-200 hover:bg-sky-800"
      onClick={onStarredTasks}
    >
      {starredTasks ? 'Show All' : 'Show Starred Tasks'}
    </button>
  );
}

StarButton.propTypes = {
  starredTasks: PropTypes.bool,
  onStarredTasks: PropTypes.func,
};
