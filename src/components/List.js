import React from "react";
import Task from "./Task";

const List = ({ taskList, handleDelete }) => {

    return (
        <ul className="list">
            {taskList.map((task) => {
                return (
                    <Task task={task} key={taskList.indexOf(task)} handleDelete={handleDelete}/>
                )
            })}
        </ul>
    )
}

export default List;