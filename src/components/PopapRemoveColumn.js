import React from "react";
import "../styles/PopupRemoveColumn.css"

function PopupRemoveColumn ({ setValueRemoveColumn, column, onRemoveColumn }) {
    return (
        <div className="popupRemoveColumn">
            <div    className="popupRemoveColumn-container"
                    onClick={(e) => {
                        setValueRemoveColumn(false)
                    }}
            >
                <div    className="popupRemoveColumn-body" 
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                >
                    <p>Are you sure to delete this column?</p>
                    <div>
                        <button className="buttonYes"
                            onClick={() => {
                                onRemoveColumn(column)
                            }}
                        >YES</button>
                        <button className="buttonNo"
                            onClick={() => {
                                setValueRemoveColumn(false)
                            }}
                        >NO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupRemoveColumn 