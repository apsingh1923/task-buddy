import { useState } from "react";

export default function Taskform({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handlesubmit = (e) => {
    e.preventDefault(); //refresh
    addTask({ text: task, priority, category, completed: false });

    //reset

    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <div id="inputBox">
      <form onSubmit={handlesubmit} className="task-form">
        <div id="inp">
          <input
            type="text"
            placeholder="Enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#8376e2",
              color: "white",
            }}
          >
            Add Task
          </button>
          {/* <h1>{task} {priority} {category}</h1> */}
        </div>

        <div id="btns">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  );
}
