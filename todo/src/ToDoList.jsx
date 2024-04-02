import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Grind", "DSA", "Maintain 8cgpa"]);
  const [newTask, addNewTask] = useState("");

  function handleInputChange(event) {
    addNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      addNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="grid place-items-center">
      <h1 className="p-10 font-extrabold text-3xl">To do list</h1>
      <div className="px-5">
        <input
          type="text"
          placeholder="Enter a task....."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="px-5" onClick={addTask}>
          Add
        </button>
      </div>
      <ol className="p-10 ">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="px-5">{task}</span>
            <button
              className="px-3 bg hover:bg-red-500"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="px-3 hover: hover:bg-green-400"
              onClick={() => moveTaskUp(index)}
            >
              UP
            </button>
            <button
              className="hover:bg-yellow-300"
              onClick={() => moveTaskDown(index)}
            >
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;