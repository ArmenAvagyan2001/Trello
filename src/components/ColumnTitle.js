import React, { useState } from "react";
import "../styles/ColumnTitle.css"
import PopupRemoveColumn from "./PopapRemoveColumn";
import PopupAddColumn from "./PopupAddTask";

function ColumnTitle ( {column, onAddTask, onRemoveColumn, onChangeTitleColumn} ) {

    const [ valueAddColumn, setValueAddColumn ] = useState(false)
    const [ valueRemoveColumn, setValueRemoveColumn ] = useState(false)
    const [changeTitle, setChangeTitle] = useState(false)
    const [newTitle, setNewTitle] = useState(column.title)
    return (
        <>
            {
                changeTitle ? 
                <form className="taskTitle"
                    onSubmit={(e) => {
                        e.preventDefault()
                        onChangeTitleColumn(newTitle, column)
                        setChangeTitle(false)
                    }}
                >
                    <input  type="text" 
                            className="inputChangeTitle"
                            value={newTitle}
                            onChange={(e) =>{
                                setNewTitle(e.target.value)
                            }}
                    />
                    <button className="buttonChange"><i class="fa fa-pencil"></i></button>
                </form> 
                    : 
                <div className="taskTitle">
                    <h3 onClick={() => {
                        setChangeTitle(true)
                    }}>{column.title}</h3>
                    <button onClick={() => {
                                setChangeTitle(true)
                            }}   
                    ><i className="fa fa-pencil"></i></button>
                    <button className="buttonAdd" 
                            onClick={() => {
                                setValueAddColumn(true)
                            }}
                    >Add task</button>
                    {valueAddColumn ?   <PopupAddColumn   onAddTask={onAddTask} 
                                                        setValueAddColumn={setValueAddColumn} 
                                                        id={column.id}
                                        /> : null}
                    {valueRemoveColumn ?    <PopupRemoveColumn column={column} 
                                                            onRemoveColumn={onRemoveColumn} 
                                                            setValueRemoveColumn={setValueRemoveColumn}
                                            /> : null}
                    <a className="buttonRemove"
                            onClick={() => {
                                setValueRemoveColumn(true)
                            }}
                    ><i className="fa fa-trash"></i></a>
                </div>
            }
        </>
    )
}

export default ColumnTitle