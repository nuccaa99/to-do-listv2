import React from "react";
import Task from "./Task";
import { nanoid } from "nanoid";

const List = ({ taskList, handleDelete }) => {
    return (
        <ul className="list">
            {taskList.map((task) => {
                return (
                    <Task task={task} key={nanoid()} handleDelete={handleDelete} />
                )
            })}
        </ul>
    )
}

export default List;