import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-sky-600">
      <div className="container mx-auto flex justify-between text-white">
        <div>&nbsp;</div>
        <p className="py-4 text-center tracking-wide">
          Copyright &copy; Tasfin Hasan | The Simple To-Do List Website
          {new Date().getFullYear()}. All Rights Reserved
        </p>
        <div className="flex items-center gap-3">
          <span>Follow me on </span>
          <a href="https://github.com/Tasfin660">
            <FaGithub className="text-lg duration-200 hover:-translate-y-[6px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}