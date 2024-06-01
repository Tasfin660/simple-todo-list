import { MdDarkMode } from 'react-icons/md';

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between pt-16">
      <div>
        <span className="text-sm font-semibold uppercase text-sky-400">
          to-do list
        </span>
        <h1 className="text-4xl font-bold uppercase tracking-wide text-zinc-700">
          Turn Dreams into Plans
        </h1>
      </div>
      <button>
        <MdDarkMode className="box-shadow box-content rounded-full bg-sky-500 p-2 text-3xl text-white duration-200 hover:bg-sky-600" />
      </button>
    </header>
  );
}
