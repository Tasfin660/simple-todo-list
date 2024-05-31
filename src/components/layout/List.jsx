import { useData } from '../../contexts/DataContext';
import Task from '../Task';

export default function List() {
  const { allTask } = useData();
  return (
    <ul className="container mx-auto my-16 flex flex-col items-center gap-10">
      {allTask.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ))}
    </ul>
  );
}
