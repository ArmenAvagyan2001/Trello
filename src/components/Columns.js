import React from "react";
import "../styles/Columns.css"
import Column from "./Column";


function Columns( { columns, onAddTask, onRemoveColumn, 
                    onRemoveTask, onReplaceTask, onReplaceColumn, 
                    onChangeTitleColumn, onChangeTask} ) {
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
                                    onChangeTitleColumn={onChangeTitleColumn}
                                    onChangeTask={onChangeTask}
                            />
                    )
                })
            }
        </div>
        
    )
}

export default Columns