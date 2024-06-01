import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useData } from '../contexts/DataContext';
import supabase from '../services/supabase';

export default function Star({ task }) {
  const { allTasks, setAllTasks } = useData();
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
      className={`box-shadow -mt-1 box-content rounded-full bg-white p-3 text-lg text-sky-500 ${loading ? 'cursor-wait' : ''}`}
      onClick={handleStar}
      disabled={loading}
    >
      {isStarred ? <FaStar /> : <FaRegStar />}
    </button>
  );
}
