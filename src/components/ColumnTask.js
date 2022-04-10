import React from "react";
import "../styles/ColumnTask.css"

function ColumnTask( {task, onRemoveTask, column} ) {
    return (
        <div className="taskItem">
            <h4>{ task.title }</h4>
            <p className="description">{ task.description }</p>
            <a href="" onClick={(e) => {
                e.preventDefault()
                onRemoveTask(task, column)
            }}>X</a>
            <p className="date">{task.date}</p>
        </div>
    )
}

export default ColumnTask