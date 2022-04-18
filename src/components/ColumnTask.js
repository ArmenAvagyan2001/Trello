import React, { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import "../styles/ColumnTask.css"
import PopupChangeTask from "./PopupChangeTask";
import PopupRemoveTask from "./PopupRemoveTask";

function ColumnTask( {task, onRemoveTask, column, onReplaceTask, onChangeTask} ) {

    const [valueRremoveTask, setValueRemoveTask] = useState(false)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "tasks",
        drop: (item) => replace(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    
      const replace = (id) => {
          onReplaceTask(id, task.id, column);
          //console.log(id);
      };

      const [{ isDragging }, drag] = useDrag(() => ({
        type: "tasks",
        item: { id: task.id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

      const [changeTask, setChangeTask] = useState(false)

    return (
          <div ref={drop}>
            <div className="taskItem" ref={drag}>
                <h4>{ task.title }</h4>
                <p className="description">{ task.description }</p>
                <a    href="" className="delete" 
                      onClick={(e) => {
                          e.preventDefault()
                          setValueRemoveTask(true)
                      }}
                ><i className="fa fa-trash"></i></a>
                <a    href="" className="change"
                      onClick={(e) => {
                        e.preventDefault()
                        setChangeTask(true)
                      }}
                ><i className="fa fa-pencil"></i></a>
                {changeTask ? <PopupChangeTask  task={task} 
                                                column={column}
                                                setChangeTask={setChangeTask}
                                                onChangeTask={onChangeTask}
                              /> : null}
                <p className="date">{task.date}</p>
                {valueRremoveTask ? <PopupRemoveTask    task={task} 
                                                        column={column} 
                                                        onRemoveTask={onRemoveTask} 
                                                        setValueRemoveTask={setValueRemoveTask}
                                    />
                : null}
            </div>
          </div>
        
        
        
    )
}

export default ColumnTask