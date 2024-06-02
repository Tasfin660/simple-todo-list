import PropTypes from 'prop-types';

export default function DateComponent({ time, showDate }) {
  function formatDate(date) {
    if (!date) return 'Invalid Date';
    const day = new Date(date).toString().split(' ')[0];
    const formattedDate = date.split('T')[0];
    return `${formattedDate} ${day}`;
  }

  return (
    <div className="basis-[120px] max-[800px]:basis-[90px] max-[600px]:hidden">
      {showDate && time && (
        <div className="show-date fontmedium box-shadow bg-sky-800 rounded-lg pb-2 pl-4 pt-1 max-[800px]:pb-1 max-[800px]:pl-2 max-[800px]:pt-0.5">
          <p className="mb-[2px] text-sm text-green-400 max-[800px]:text-xs">
            Created At
          </p>
          <p className="text-xs text-fuchsia-400 max-[800px]:text-[10px]">
            {formatDate(time)}
          </p>
        </div>
      )}
    </div>
  );
}

DateComponent.propTypes = {
  time: PropTypes.string,
  showDate: PropTypes.bool,
};
