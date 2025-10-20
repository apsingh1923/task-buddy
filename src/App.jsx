import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
    countOfTaskCompleted--;
  };

  const clearTasks = () => {
    const check = confirm("Are you sure you want to delete all Tasks ?");
    if (check == true) {
      setTasks([]);
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="title">Task Focus</h1>
        <p className="tagline">I am your friendly TaskManager</p>
      </header>
      <Taskform addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
      {tasks.length > 0 && (
        <button onClick={clearTasks} className="clear-btn">
          Clear all tasks
        </button>
      )}

      <p id="message">Built with ❤️ for productivity</p>
    </div>
  );
}
