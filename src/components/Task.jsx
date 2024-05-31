import { IoIosCloseCircle } from 'react-icons/io';

export default function Task({ task, index }) {
  return (
    <li className="items-cente flex">
      <span className="flex w-14 items-center justify-center rounded-l-full bg-white text-2xl font-semibold text-sky-600">
        {index + 1}
      </span>
      <div className="flex w-[1000px] justify-between rounded-r-full bg-sky-600 px-4 py-3 text-white">
        <p className="text-xl">{task.task}</p>
        <button
          className="text-2xl duration-200 hover:rotate-90"
          //  onClick={() => removeTask(index)}
        >
          <IoIosCloseCircle />
        </button>
      </div>
    </li>
  );
}
