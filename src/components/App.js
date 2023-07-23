import { React, useState, useEffect } from "react";
import "../style.css";
import List from "./List";
import Pagination from "./Pagination";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [taskPerPage] = useState(3);
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
        const curPage = Math.ceil((taskList.length + 1) / taskPerPage)
        setCurrentPage(curPage)

        setTask("")

    }

    const handleDelete = (task) => {
        setTaskList(taskList.filter((item) => item !== task))
        console.log(taskList.length)
    }


    const handleInputChange = (event) => {
        setTask(event.target.value);

    }


    const indexOfLastTask = currentPage * taskPerPage;
    const indexOfFirstTask = indexOfLastTask - taskPerPage;
    const currentTasks = taskList.slice(indexOfFirstTask, indexOfLastTask);



    const paginate = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className="container">
            <div className="wrapper">
                <header>To-Do.</header>
                <form className="list--container">
                    <List taskList={currentTasks} handleDelete={handleDelete} />
                    <input value={task} type="text" placeholder="new task." className="list--input" onChange={handleInputChange}></input>
                    <button type="submit" className="list--button" onClick={handleAdd}>add task.</button>
                    <Pagination currentPage={currentPage} taskPerPage={taskPerPage} totalTasks={taskList.length} paginate={paginate} />
                </form>
            </div>
        </div>
    )
}

export default App;