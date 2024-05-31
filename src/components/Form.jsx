import { useState } from 'react';
import supabase from '../services/supabase';
import { useData } from '../contexts/DataContext';
import { MdError } from 'react-icons/md';

export default function Form() {
  const { allTask, setAllTask } = useData();
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
      setAllTask([...allTask, data[0]]);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setInput('');
    }
  }
  return (
    <form
      className="mt-16 flex h-max justify-center pb-6"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <input
          type="text"
          value={input}
          placeholder="Input your task here..."
          maxLength={65}
          onChange={handleInput}
          className="w-[500px] rounded-l-full bg-gray-200 px-4 py-2 font-medium text-gray-700 outline-none placeholder:text-gray-500 focus:bg-gray-50"
        />
        <p className="absolute -bottom-8 right-1 rounded-full bg-sky-600 px-2 py-[1px] text-[10px] tracking-wider text-white">
          {65 - input.length}/65
        </p>
        {input.length >= 65 && (
          <div className="max-lenght absolute -top-14 right-0 flex items-center gap-1 rounded-sm bg-white px-2 py-1 text-sm font-medium text-sky-600">
            <MdError className="text-base" /> <p>Max Lenght 65</p>
          </div>
        )}
      </div>
      <button
        className="rounded-r-full bg-sky-600 pl-3 pr-4 text-white transition duration-200 hover:bg-sky-700 disabled:bg-sky-600"
        disabled={input.length < 1}
      >
        <span>ADD</span>
      </button>
    </form>
  );
}
