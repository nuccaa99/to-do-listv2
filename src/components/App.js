import React from "react";
import "../style.css"

const App = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <header>To-Do.</header>
                <div className="list--container">
                    <div className="list"></div>
                    <input type="text" placeholder="new task." className="list--input"></input>
                    <button className="list--button">add task.</button>
                </div>
            </div>
        </div>
    )
}

export default App;