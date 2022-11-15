import { FaTimes } from "react-icons/fa";
const NewTaskCard = ({ newTask, handleDelete }) => {
  return (
    <div className="px-20 mx-20">
      <div className="rounded-md py-6 bg-slate-300 my-3 px-10 flex flex-row justify-between hover:scale-105 duration-300hover:scale-105 duration-300">
        <h3>{newTask.todo}</h3>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(newTask.id)}
        />
      </div>
    </div>
  );
};

export default NewTaskCard;
