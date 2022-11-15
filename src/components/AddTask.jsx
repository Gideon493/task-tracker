import { useState } from "react";

const AddTask = ({ onAddTask, removeShowtask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please Add a task");
      return;
    } else if (!day) {
      alert("Please Add Day");
      return;
    } else if (!time) {
      alert("Please Time");
      return;
    } else {
      onAddTask({ text, day, time });
      setText("");
      setDay("");
      setTime("");
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="absolute px-10 bg-slate-400   rounded-lg py-10 mx-20 flex flex-col text-black justify-between">
        <label htmlFor="">Title</label>
        <input
          placeholder="Add Task"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="my-3 rounded-md py-2  px-24 "
        />
        <label htmlFor="">Day</label>
        <input
          placeholder="Add Day"
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="my-3 rounded-md py-2  px-24"
        />
        <label htmlFor="">Time</label>
        <input
          placeholder="Add Time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="my-3 rounded-md py-2  px-24"
        />
        {text.length > 0 && day.length > 0 && time.length > 0 ? (
          <button
            onClick={onAddTask}
            className="bg-red-500 my-3 px-24 py-2 rounded-md hover:scale-105 duration-200"
          >
            Save Task
          </button>
        ) : (
          <button className="bg-red-300 my-3 px-24 py-2 rounded-md hover:scale-105 duration-200 cursor-not-allowed">
            Save Task
          </button>
        )}

        <button
          onClick={removeShowtask}
          className="hover:bg-red-500 bg-white outline outline-1 outline-red-500 my-3 px-24 py-2 rounded-md hover:scale-105 duration-200"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default AddTask;
