import { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Form from './components/Form';
import List from './components/layout/List';
import Suggestions from './components/Suggestions';
import StarButton from './components/StarButton';
import { useData } from './contexts/DataContext';

export default function App() {
  const { allTasks, setAllTasks } = useData();
  const [starredTasks, setStarredTasks] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(allTasks);

  useEffect(() => {
    if (starredTasks) {
      setFilteredTasks(allTasks.filter(el => el.starred === true));
    } else {
      setFilteredTasks(allTasks);
    }
  }, [allTasks, starredTasks]);

  function handleStarredTasks() {
    setStarredTasks(prev => !prev);
  }
  return (
    <MainLayout>
      <main>
        <div className="mt-16 flex justify-center gap-8 pb-6">
          <Suggestions />
          <Form />
          <StarButton
            starredTasks={starredTasks}
            onStarredTasks={handleStarredTasks}
          />
        </div>
        <List filteredTasks={filteredTasks} />
      </main>
    </MainLayout>
  );
}
