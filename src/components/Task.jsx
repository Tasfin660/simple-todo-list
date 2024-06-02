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
    <div className="flex items-center gap-10 max-[800px]:gap-4">
      <Date time={task.created_at} showDate={showDate} />
      <li
        className="flex flex-1"
        onMouseEnter={() => setShowDate(true)}
        onMouseLeave={() => setShowDate(false)}
        onClick={() => setShowDate(true)}
      >
        <span className="box-shadow text-sky-500 dark:text-sky-600 max-[800px]:text-md flex w-14 items-center justify-center rounded-l-full bg-white text-2xl font-semibold max-[1020px]:text-lg max-[800px]:w-[40px] max-[500px]:w-[30px] max-[500px]:text-sm">
          {length - index}
        </span>
        <div className="box-shadow from-sky-500 dark:from-sky-600 flex flex-1 justify-between rounded-r-full bg-gradient-to-br to-blue-500 px-4 py-3 text-white dark:to-blue-600 max-[800px]:py-2 max-[500px]:pl-2">
          <p className="text-xl max-[1020px]:text-base max-[800px]:text-sm max-[500px]:text-[12px] max-[400px]:text-[10px] max-[400px]:leading-4">
            {task.task}
          </p>
          <button
            className="pl-4 text-2xl duration-200 hover:rotate-90 max-[500px]:text-lg"
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
