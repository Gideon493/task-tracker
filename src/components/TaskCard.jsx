import { FaTimes } from "react-icons/fa";
const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="px-20 mx-20">
      <div className="rounded-md py-6 bg-slate-300 my-3 px-10 flex flex-row justify-between hover:scale-105 duration-300">
        <h2>{task.text}</h2>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default TaskCard;
