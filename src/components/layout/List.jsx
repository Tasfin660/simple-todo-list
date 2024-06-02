import PropTypes from 'prop-types';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useLoading } from '../../contexts/DataContext';
import Task from '../Task';
import Loading from '../Loading';
import ShowMore from '../ShowMore';

export default function List({ filteredTasks }) {
  const { isLoading } = useLoading();
  const [maxOutput, setMaxOutput] = useState(5);
  const containerRef = useRef(null);

  const reversedTasks = useMemo(() => {
    return [...filteredTasks].reverse();
  }, [filteredTasks]);

  function handleMaxOutput(value) {
    setMaxOutput(value);
  }

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [maxOutput]);

  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <ul className="container mx-auto my-16 flex flex-col gap-10 px-6">
        {reversedTasks
          .map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              length={filteredTasks.length}
            />
          ))
          .slice(0, maxOutput)}
      </ul>
      {filteredTasks.length > 5 && (
        <ShowMore handleMaxOutput={handleMaxOutput} />
      )}
    </div>
  );
}
List.propTypes = {
  filteredTasks: PropTypes.array,
};
