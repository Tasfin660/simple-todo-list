import { useState, useEffect, useRef } from 'react';
import { useData } from './contexts/DataContext';
import MainLayout from './components/layout/MainLayout';
import Suggestions from './components/Suggestions';
import Form from './components/Form';
import StarButton from './components/StarButton';
import List from './components/layout/List';
import suggs from './assets/suggs';

let temp = null;
function randTasksGenerator() {
  let rand = Math.floor(Math.random() * suggs.length);
  while (rand === temp) {
    rand = Math.floor(Math.random() * suggs.length);
  }
  temp = rand;
  return suggs[rand];
}

export default function App() {
  const [input, setInput] = useState('');
  const { allTasks, setAllTasks } = useData();
  const [starredTasks, setStarredTasks] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(allTasks);
  const [pause, setPause] = useState(false);
  const allTasksArray = useRef();

  function checkAllSuggsIncluded() {
    allTasksArray.current = allTasks.map(el => el.task);
    return suggs.every(sugg => allTasksArray.current.includes(sugg));
  }

  useEffect(() => {
    allTasksArray.current = allTasks.map(el => el.task);
    const allSuggsIncluded = checkAllSuggsIncluded();
    if (!allSuggsIncluded) setPause(false);
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
    let randomTask = randTasksGenerator();

    const allSuggsIncluded = checkAllSuggsIncluded();
    if (allSuggsIncluded) {
      return;
    } else {
      while (allTasks.some(el => el.task === randomTask)) {
        randomTask = randTasksGenerator();
      }
    }
    setTimeout(() => {
      setInput(randomTask);
      setPause(false);
    }, 500);
  }

  return (
    <MainLayout>
      <main>
        <div className="mt-16 grid grid-cols-[repeat(3,max-content)] justify-center gap-8 pb-6 max-[1280px]:grid-cols-[repeat(2,max-content)] max-[600px]:gap-x-4 max-[500px]:mt-10 max-[400px]:grid-cols-[max-content]">
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
