import React, { useState } from "react";
import "../styles/PopupChangeTask.css"

function PopupChangeTask ({ task, setChangeTask, column, onChangeTask }) {

    const [changeTaskTitle, setChangeTaskTitle] = useState(task.title);
    const [changeTaskDescription, setChangeTaskDescription] = useState(task.description)

    return (
        <div className="popupChangeTask">
            <div    className="popupChangeTaskContainer"
                    onClick={(e) => {
                        setChangeTask(false)
                    }}
            >
                <div    className="popupChangeTaskBody"
                        onClick={(e) => {
                            e.stopPropagation()
                        }} 
                >
                    <div className="changeDiv">
                        <p>Change title</p>
                        <input  type="text" 
                                placeholder="CHANGE TITLE"
                                value={changeTaskTitle}
                                onChange={(e) => {
                                    setChangeTaskTitle(e.target.value)
                                }}
                        />
                    </div>
                    <div className="changeDiv">
                        <p>Change description</p>
                        <input  type="text" 
                                placeholder="CHANGE DESCRIPTION"
                                value={changeTaskDescription}
                                onChange={(e) => {
                                    setChangeTaskDescription(e.target.value)
                                }}
                        />
                    </div>
                    <button className="changeButton"
                            onClick={() => {
                                onChangeTask(changeTaskTitle, changeTaskDescription, column, task)
                                setChangeTask(false)
                            }}
                    >Change task</button>
                    <a href="" onClick={(e) => {
                        e.preventDefault()
                        setChangeTask(false)
                    }}>X</a>
                </div>
            </div>
        </div>
    )
}

export default PopupChangeTask