import { IoSunnyOutline } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';

export default function Header({ isDark, onDarkMode }) {
  return (
    <header className="container mx-auto flex items-center justify-between px-6 pt-16 max-[500px]:justify-center">
      <div className="max-[500px]:flex max-[500px]:flex-col max-[500px]:items-center">
        <span className="text-sm font-semibold uppercase text-sky-400 dark:text-sky-500 max-[768px]:font-normal max-[500px]:text-[10px]">
          to-do list
        </span>
        <h1 className="text-4xl font-bold uppercase tracking-wide text-zinc-700 dark:text-white max-[768px]:text-2xl max-[500px]:text-xl">
          Turn Dreams into Plans
        </h1>
      </div>
      <button
        className="box-shadow box-content rounded-full bg-sky-500 p-2 text-3xl text-white duration-200 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 max-[768px]:text-xl max-[500px]:fixed max-[500px]:right-5 max-[500px]:top-5 max-[500px]:text-base"
        onClick={onDarkMode}
      >
        {isDark ? <IoSunnyOutline /> : <MdDarkMode />}
      </button>
    </header>
  );
}
