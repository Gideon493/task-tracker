import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Header from "./components/Header";
import NewTasks from "./components/NewTasks";
import Tasks from "./components/Tasks";

const App = () => {
  const [showTask, setShowTask] = useState(false)
  const [newTasks, setNewTasks] = useState(null)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete Mern Projects",
    },

  ]);
  useEffect(() => {
    const getTasks = async () => {
      const apiTasks = await fetchTasks()
      setNewTasks(apiTasks)
    }
    getTasks()
  }, [])
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:1700/tasks')
    const data = await res.json()
    console.log(data);
    return data
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    setNewTasks(newTasks.filter((newTask) => newTask.id !== id))
  }
  const handleShowtask = () => {
    setShowTask(true)
  }
  const removeShowtask = () => {
    setShowTask(false)
  }
  const onAddTask = (task) => {
    setTasks([...tasks, task]);
    console.log(task);
  }
  return (
    <div className=" py-4 my-5 px-20 mx-40 border border-cyan-700">
      <div className="py-6 px-20 mx-20 my-3 flex flex-row justify-between">
        <Header />
        <Button handleShowtask={handleShowtask} />
      </div>
      {showTask && <AddTask removeShowtask={removeShowtask} onAddTask={onAddTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} handleDelete={handleDelete} removeShowtask={removeShowtask} /> : <div className="text-3xl text-center font-bold text-red-500">No tasks to show</div>}
      {newTasks && <NewTasks newTasks={newTasks} handleDelete={handleDelete} />}
    </div>
  );
}

export default App;
