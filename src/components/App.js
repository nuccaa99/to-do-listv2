import { React, useState } from "react";
import "../style.css";
import List from "./List";

const App = () => {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([]);

    const handleAdd = (event) => {
        event.preventDefault();
        setTaskList([...taskList, task])
        setTask("")
    }

    const handleDelete = (task) => {
        setTaskList(taskList.filter((item) => item !== task))

    }

    const handleInputChange = (event) => {
        if (event.target.value.length > 0) {
            setTask(event.target.value);
        }
    }


    return (
        <div className="container">
            <div className="wrapper">
                <header>To-Do.</header>
                <div className="list--container">
                    <List taskList={taskList} handleDelete={handleDelete} />
                    <input value={task} type="text" placeholder="new task." className="list--input" onChange={handleInputChange}></input>
                    <button type="submit" className="list--button" onClick={handleAdd}>add task.</button>
                </div>
            </div>
        </div>
    )
}

export default App;