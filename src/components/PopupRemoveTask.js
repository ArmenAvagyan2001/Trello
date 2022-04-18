import React from "react";
import "../styles/PopupRemoveTask.css"

function PopupRemoveTask ({ onRemoveTask, task, column, setValueRemoveTask}) {
    return (
        <div className="popupRemoveTask">
            <div    className="popupRemoveTask-container"
                    onClick={(e) => {
                        setValueRemoveTask(false)
                    }}
            >
                <div    className="popupRemoveTask-body"
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                >
                    <p>Are you sure to delete this task?</p>
                    <div>
                        <button className="buttonYes"
                                onClick={(e) => {
                                    e.preventDefault()
                                    onRemoveTask(task, column)
                                }}
                        >YES</button>
                        <button className="buttonNo"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setValueRemoveTask(false)
                                }}
                        >NO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupRemoveTask