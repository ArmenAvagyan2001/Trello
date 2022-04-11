import React from "react";
import "../styles/Columns.css"
import Column from "./Column";


function  Columns( { columns, onAddTask, onRemoveColumn, onRemoveTask, onReplaceTask, onReplaceColumn} ) {
    return (
        <div className="Columns">
            {
                columns.map((column) => {
                    return (
                            <Column column={column} 
                                    key={column.id}
                                    onAddTask={onAddTask} 
                                    onRemoveColumn={onRemoveColumn} 
                                    onRemoveTask={onRemoveTask}
                                    onReplaceTask={onReplaceTask}
                                    onReplaceColumn={onReplaceColumn}
                            />
                    )
                })
            }
        </div>
        
    )
}

export default Columns