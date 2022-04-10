import React, { useState } from "react";
import "../styles/ColumnTitle.css"
import PopupRemoveColumn from "./PopapRemoveColumn";
import PopupAddColumn from "./PopupAddTask";

function ColumnTitle ( {column, onAddTask, onRemoveColumn} ) {

    const [ valueAddColumn, setValueAddColumn ] = useState(false)
    const [ valueRemoveColumn, setValueRemoveColumn ] = useState(false)
    return (
        <div className="taskTitle">
            <h3>{column.title}</h3>
            <div></div>
            {valueAddColumn ? <PopupAddColumn onAddTask={onAddTask} setValueAddColumn={setValueAddColumn} id={column.id}/> : null}
            <button className="buttonAdd" 
                    onClick={() => {
                        setValueAddColumn(true)
                    }}
            >Add task</button>
            {valueRemoveColumn ? <PopupRemoveColumn column={column} onRemoveColumn={onRemoveColumn} setValueRemoveColumn={setValueRemoveColumn}/> : null}
            <a className="buttonRemove"
                    onClick={() => {
                        setValueRemoveColumn(true)
                    }}
            >X</a>
        </div>
    )
}

export default ColumnTitle