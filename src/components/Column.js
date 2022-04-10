import React from "react";
import ColumnTask from "./ColumnTask";
import ColumnTitle from "./ColumnTitle";
import "../styles/Columns.css"
import { useDrag, useDrop } from "react-dnd";

function Column ( { column, onAddTask, onRemoveColumn, onRemoveTask, onReplaceTask, onReplaceColumn } ) {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "item",
        drop: (item) => replace(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    
      const replace = (id) => {
          onReplaceColumn(id, column.id)
      };

      const [{ isDragging }, drag] = useDrag(() => ({
        type: "item",
        item: { id: column.id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

    return (
        <div ref={drop}>
            <div className="Column" ref={drag}>
                <ColumnTitle column={column} onAddTask={ onAddTask } onRemoveColumn={onRemoveColumn}/>
                {column.tasks.map( (task ) => {
                    return (
                        <div key={task.id} className="Tasks">
                            <ColumnTask task={task} column={column} onRemoveTask={onRemoveTask} onReplaceTask={onReplaceTask}/>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Column