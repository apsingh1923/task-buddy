export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <div>
            <div
              id="vflex"
              style={{
                opacity: task.completed ? 0.5 : 1,
              }}
            >
              <span>
                <input
                  type="checkbox"
                  name="task"
                  checked={task.completed}
                ></input>{" "}
                {task.text}
              </span>

              <small>
                <span id="priority">{task.priority}</span>
                <span id="category">{task.category}</span>
              </small>
            </div>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
