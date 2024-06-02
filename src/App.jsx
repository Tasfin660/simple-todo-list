import { useState, useEffect } from 'react';
import { useData } from './contexts/DataContext';
import MainLayout from './components/layout/MainLayout';
import Suggestions from './components/Suggestions';
import Form from './components/Form';
import StarButton from './components/StarButton';
import List from './components/layout/List';
import suggs from './assets/suggs';

export default function App() {
  const [input, setInput] = useState('');
  const { allTasks, setAllTasks } = useData();
  const [starredTasks, setStarredTasks] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(allTasks);
  const [pause, setPause] = useState(false);

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

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSuggestions() {
    setPause(true);
    let rand = Math.floor(Math.random() * suggs.length);
    let randomTask = suggs[rand];
    setTimeout(() => {
      setInput(randomTask);
      setPause(false);
    }, 500);
  }

  return (
    <MainLayout>
      <main>
        <div className="mt-16 flex justify-center gap-8 pb-6">
          <Suggestions pause={pause} onSuggestions={handleSuggestions} />
          <Form input={input} setInput={setInput} onInput={handleInput} />
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
