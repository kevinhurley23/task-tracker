import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ id, task, deleteTask, toggleReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
