import { React, useState, useEffect } from "react";
import "../style.css";
import List from "./List";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState(() => {
        const tasks = JSON.parse(localStorage.getItem('taskList'));
        return tasks || [];
    });


    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);


    const handleAdd = (event) => {
        event.preventDefault();
        if (task.length > 0) {
            setTaskList([...taskList, task])
        }
        setTask("")
    }

    const handleDelete = (task) => {
        setTaskList(taskList.filter((item) => item !== task))

    }

    const handleInputChange = (event) => {
        setTask(event.target.value);
    }

    const indexOfLastTask = currentPage * postPerPage;
    const indexOfFirstTask = indexOfLastTask - postPerPage;
    const currentTasks = taskList.slice(indexOfFirstTask, indexOfLastTask);

    console.log(currentTasks)

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