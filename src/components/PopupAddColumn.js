import { useState } from "react"
import "../styles/PopupAddTask.css"

function PopupAddTask({setValueAddColumn, onAddTask, id}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    

    return(
        <div className="popup">
            <div className="popup-container">
                <div className="popup-body">
                    <a href="" onClick={(e) =>{
                        e.preventDefault()
                        setValueAddColumn(false)
                    }}>X</a>
                    <div>
                        <p>Title task</p>
                        <input  type="text" 
                                placeholder="TITLE" 
                                value={title} 
                                onChange={(e) => {
                                    e.preventDefault();
                                    setTitle(e.target.value)
                                }}
                        />
                    </div>
                    <div>
                        <p>Desctiption task</p>
                        <input  type="text" 
                            placeholder="DESCRIPTION" 
                            value={description}
                            onChange={(e) => {
                                e.preventDefault()
                                setDescription(e.target.value)
                            }}
                        />
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        if(title.length > 0 && description.length > 0) {
                            onAddTask(title, description, id)
                            setValueAddColumn(false)
                        }
                    }}>Add item</button>
                </div>
            </div>
        </div>
    )
}


export default PopupAddTask