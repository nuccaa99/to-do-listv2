import React from "react";

const List = ({ taskList }) => {
    return (
        <ul className="list">
            {taskList.map((task) => {
                return (
                    <li key={taskList.indexOf(task)}>{task}</li>)
            })}
        </ul>
    )
}

export default List;