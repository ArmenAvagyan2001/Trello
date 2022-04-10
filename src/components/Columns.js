import React from "react";
import ColumnTitle from "./ColumnTitle";
import "../styles/Columns.css"
import ColumnTask from "./ColumnTask";

function  Columns( { columns, onAddTask, onRemoveColumn, onRemoveTask} ) {
    return (
        <div className="Columns">
            {
                columns.map(column => {
                return <div className="Column" key={ column.id } >
                            <ColumnTitle column={column} onAddTask={ onAddTask } onRemoveColumn={onRemoveColumn}/>
                            {column.tasks.map( (task ) => {
                                return (
                                    <div key={task.id} className="Tasks">
                                        <ColumnTask task={task} column={column} onRemoveTask={onRemoveTask}/>
                                    </div>
                                )
                                
                            })}
                        </div>
                })
            }
        </div>
    )
}

export default Columns