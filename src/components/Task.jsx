import PropTypes from 'prop-types';
import supabase from '../services/supabase';
import { useState } from 'react';
import { useData } from '../contexts/DataContext';
import Date from './Date';
import Star from './Star';
import { IoIosCloseCircle } from 'react-icons/io';

export default function Task({ task, length, index }) {
  const { allTasks, setAllTasks } = useData();
  const [showDate, setShowDate] = useState(false);

  async function handleDelete() {
    try {
      await supabase.from('tasks').delete().eq('id', task.id);
      setAllTasks(allTasks.filter(el => el.id !== task.id));
    } catch (e) {
      console.log('There was an error in deleting the task. Message: ' + e);
    }
  }

  if (!task) {
    console.log('Task is undefined');
    return null;
  }

  return (
    <div className="flex items-center gap-10">
      <Date time={task.created_at} showDate={showDate} />
      <li
        className="flex flex-1"
        onMouseEnter={() => setShowDate(true)}
        onMouseLeave={() => setShowDate(false)}
        onClick={() => setShowDate(true)}
      >
        <span className="box-shadow flex w-14 items-center justify-center rounded-l-full bg-white text-2xl font-semibold text-sky-500">
          {length - index}
        </span>
        <div className="box-shadow flex flex-1 justify-between rounded-r-full bg-gradient-to-br from-sky-500 to-blue-400 px-4 py-3 text-white">
          <p className="text-xl">{task.task}</p>
          <button
            className="text-2xl duration-200 hover:rotate-90"
            onClick={handleDelete}
          >
            <IoIosCloseCircle />
          </button>
        </div>
      </li>
      <Star task={task} />
    </div>
  );
}
Task.propTypes = {
  task: PropTypes.object,
  length: PropTypes.number,
  index: PropTypes.number,
};
