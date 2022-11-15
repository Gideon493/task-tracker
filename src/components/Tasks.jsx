import TaskCard from "./TaskCard";

const Tasks = ({ tasks, handleDelete }) => {
  return (
    <div>
      {tasks &&
        tasks.map((task) => {
          return (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          );
        })}
    </div>
  );
};

export default Tasks;
