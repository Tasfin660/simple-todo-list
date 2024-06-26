import PropTypes from 'prop-types';
import { useState } from 'react';
import supabase from '../services/supabase';
import { useData } from '../contexts/DataContext';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function Star({ task }) {
  const { setAllTasks } = useData();
  const [isStarred, setIsStarred] = useState(task.starred);
  const [loading, setLoading] = useState(false);

  async function handleStar() {
    setLoading(true);
    setIsStarred(!isStarred);
    try {
      await supabase
        .from('tasks')
        .update({ starred: !isStarred })
        .eq('id', task.id);

      setAllTasks(prevTasks =>
        prevTasks.map(el =>
          el.id === task.id ? { ...el, starred: !isStarred } : el,
        ),
      );
    } catch (e) {
      console.log('There was a problem in updating the task. Message: ' + e);

      setIsStarred(isStarred);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className={`box-shadow text-sky-500 dark:text-sky-600 -mt-1 box-content rounded-full bg-white p-3 text-lg max-[800px]:p-2 max-[800px]:text-base ${loading ? 'cursor-wait' : ''}`}
      onClick={handleStar}
      disabled={loading}
    >
      {isStarred ? <FaStar /> : <FaRegStar />}
    </button>
  );
}
Star.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    starred: PropTypes.bool,
  }),
};
