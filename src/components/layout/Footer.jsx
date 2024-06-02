import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-sky-500 dark:bg-sky-600">
      <div className="container mx-auto grid grid-cols-[max-content,1fr,max-content] items-center justify-center px-6 py-4 text-white max-[768px]:grid-cols-[repeat(2,1fr)] max-[768px]:gap-y-6">
        <button onClick={() => window.location.reload()}>
          <img
            src="/logo.png"
            alt="website logo"
            className="block h-[18px] w-[18px]"
          />
        </button>
        <p className="mx-auto text-center tracking-wide max-[1024px]:w-[500px] max-[768px]:col-span-2 max-[768px]:row-start-2 max-[768px]:row-end-3 max-[768px]:w-full">
          Copyright &copy; Tasfin Hasan | The Simple To-Do List Website&nbsp;
          {new Date().getFullYear()}. All Rights Reserved
        </p>
        <div className="flex items-center gap-3 max-[768px]:justify-self-end">
          <span>Follow me on </span>
          <a href="https://github.com/Tasfin660" target="_blank">
            <FaGithub className="text-lg !duration-200 hover:-translate-y-[6px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
