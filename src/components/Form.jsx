import { useState } from 'react';
import supabase from '../services/supabase';
import { useData } from '../contexts/DataContext';
import { MdError } from 'react-icons/md';
//dark:focus:bg-gray-50
export default function Form() {
  const { allTasks, setAllTasks } = useData();
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let { data } = await supabase
        .from('tasks')
        .insert({ task: input })
        .select();
      setAllTasks([...allTasks, data[0]]);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setInput('');
    }
  }
  return (
    <form className="flex h-max" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          value={input}
          placeholder="Input your task here..."
          maxLength={100}
          onChange={handleInput}
          className="box-shadow w-[500px] rounded-l-full bg-gray-300 px-4 py-3 font-medium text-gray-700 outline-none placeholder:text-gray-500"
        />
        <p className="box-shadow absolute -bottom-8 right-1 rounded-full bg-sky-500 px-2 py-[1px] text-[10px] tracking-wider text-white">
          {100 - input.length}/100
        </p>
        {input.length >= 100 && (
          <div className="box-shadow max-lenght absolute -top-14 right-0 flex items-center gap-1 rounded-sm bg-white px-2 py-1 text-sm font-medium text-sky-500">
            <MdError className="text-base" /> <p>Max Lenght 100</p>
          </div>
        )}
      </div>
      <button
        className="box-shadow rounded-r-full bg-sky-500 pl-3 pr-4 text-white transition duration-200 hover:bg-sky-700 disabled:bg-sky-500"
        disabled={input.length < 1}
      >
        <span>ADD</span>
      </button>
    </form>
  );
}
