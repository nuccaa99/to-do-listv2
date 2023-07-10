import React from "react";

const Task = ({ task, handleDelete }) => {
    return (
        <li >
            <input type="checkbox" value="task" className="task--checkbox"></input>
            <label htmlFor="task" className="task">{task}</label>
            <i className="fa-solid fa-delete-left" onClick={() => handleDelete(task)}></i>
        </li>
    )
}

export default Task;