import PropTypes from 'prop-types';
import supabase from '../services/supabase';
import { useData } from '../contexts/DataContext';
import { MdError } from 'react-icons/md';

export default function Form({ input, setInput, onInput }) {
  const { allTasks, setAllTasks } = useData();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let { data } = await supabase
        .from('tasks')
        .insert({ task: input })
        .select();
      setAllTasks([...allTasks, data[0]]);
    } catch (e) {
      console.log(
        'There was an error in adding task to the database. Message: ' + e,
      );
    } finally {
      setInput('');
    }
  }
  return (
    <form
      className="flex h-max max-[1280px]:col-span-2 max-[1280px]:row-start-2 max-[1280px]:row-end-3 max-[400px]:col-auto max-[400px]:row-start-3 max-[400px]:row-end-4"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <input
          type="text"
          value={input || ''}
          placeholder="Input your task here..."
          maxLength={100}
          onChange={onInput}
          className="box-shadow w-[500px] rounded-l-full bg-gray-300 px-4 py-3 font-medium text-gray-700 outline-none placeholder:text-gray-500 dark:focus:bg-gray-50 max-[800px]:py-2 max-[700px]:w-[400px] max-[600px]:w-[300px] max-[400px]:w-[200px] max-[400px]:text-sm"
        />
        <p className="box-shadow absolute -bottom-8 right-1 rounded-full bg-sky-500 px-2 py-[1px] text-[10px] tracking-wider text-white dark:bg-sky-600 max-[400px]:text-[8px]">
          {100 - input?.length}/100
        </p>
        {input?.length >= 100 && (
          <div className="box-shadow max-lenght absolute -top-14 right-0 flex items-center gap-1 rounded-sm bg-white px-2 py-1 text-sm font-medium text-sky-500 dark:text-sky-600 max-[1280px]:-bottom-14 max-[1280px]:left-0 max-[1280px]:right-auto max-[1280px]:top-auto max-[800px]:-bottom-10 max-[800px]:px-1 max-[800px]:py-0 max-[800px]:text-[10px] max-[500px]:text-[8px]">
            <MdError className="text-base max-[800px]:text-[10px] max-[500px]:text-[8px]" />
            <p className="max-[500px]:leading-4">Max Lenght 100</p>
          </div>
        )}
      </div>
      <button
        className="box-shadow rounded-r-full bg-sky-500 pl-3 pr-4 text-white transition duration-200 hover:bg-sky-600 disabled:bg-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 max-[400px]:px-2 max-[400px]:text-sm"
        disabled={input?.length < 1}
      >
        <span>ADD</span>
      </button>
    </form>
  );
}
Form.propTypes = {
  input: PropTypes.string,
  setInput: PropTypes.func,
  onInput: PropTypes.func,
};
