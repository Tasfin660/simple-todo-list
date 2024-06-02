import PropTypes from 'prop-types';

export default function DateComponent({ time, showDate }) {
  function formatDate(date) {
    if (!date) return 'Invalid Date';
    const day = new Date(date).toString().split(' ')[0];
    const formattedDate = date.split('T')[0];
    return `${formattedDate} ${day}`;
  }

  return (
    <div className="basis-[120px]">
      {showDate && time && (
        <div className="show-date fontmedium box-shadow rounded-lg bg-sky-800 pb-2 pl-4 pt-1">
          <p className="mb-[2px] text-sm text-green-400">Created At</p>
          <p className="text-xs text-fuchsia-400">{formatDate(time)}</p>
        </div>
      )}
    </div>
  );
}

DateComponent.propTypes = {
  time: PropTypes.string,
  showDate: PropTypes.bool,
};
