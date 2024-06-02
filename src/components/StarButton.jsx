import PropTypes from 'prop-types';

export default function StarButton({ starredTasks, onStarredTasks }) {
  return (
    <button
      className="box-shadow bg-sky-700 hover:bg-sky-800 w-[150px] rounded-full py-3 text-sm text-green-400 duration-200 max-[800px]:p-2 max-[400px]:row-start-1 max-[400px]:row-end-2 max-[400px]:justify-self-center"
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
