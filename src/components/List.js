import React from "react";

const List = ({ taskList }) => {
    return (
        <ul className="list">
            {taskList.map((task) => {
                return (
                    <li key={taskList.indexOf(task)}>
                        <input type="checkbox" value="task" className="task--checkbox"></input>
                        <label htmlFor="task" className="task">{task}</label>
                        <button className="task--delete">x</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;