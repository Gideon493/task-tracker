import NewTaskCard from "./NewTaskCard";

const NewTasks = ({ newTasks, handleDelete }) => {
  return (
    <div>
      {newTasks.map((newTask) => {
        return (
          <NewTaskCard
            key={newTask.id}
            newTask={newTask}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default NewTasks;
