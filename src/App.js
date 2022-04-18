import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {  connect } from "react-redux";
import { addTask, removeColumn, removeTask, addColumn, replaceTask, replaceColumn, changeColumnTitle, changeTask } from "./actions/Columns";
import AddColumn from "./components/AddColumns";
import Columns from "./components/Columns";
import "./styles/App.css"


function App ( {columns, addTask, removeColumn, removeTask, addColumn, replaceTask, replaceColumn, changeColumnTitle, changeTask}) {
    
    return (
      <DndProvider backend={HTML5Backend}>
        <div id="Columns">
          <AddColumn onAddColumn={ (columnTitle) => addColumn(columnTitle) }/>
          <Columns  columns={ columns } 
                    onAddTask={(title, description, id)=> addTask(title, description, id) }
                    onRemoveColumn={ (column) => removeColumn(column) }
                    onRemoveTask={ (task, column) => removeTask(task, column) }
                    onReplaceTask={ (draggedId, droppedId, column) => replaceTask(draggedId, droppedId, column) }
                    onReplaceColumn={ (draggedId, droppedId) => replaceColumn(draggedId, droppedId) }
                    onChangeTitleColumn={(newTitle, column) => changeColumnTitle(newTitle, column)}
                    onChangeTask={ (changeTaskTitle, changeTaskDescription, column, task) => changeTask(changeTaskTitle, changeTaskDescription, column, task) }
          />
        </div>
      </DndProvider>
      
    )
  
}

const mapStateToProps = state => {
  return { 
    columns: state.tasks.columns 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: (title, description, id) => dispatch(addTask(title, description, id)), 
    removeTask: (task, column) => dispatch(removeTask(task, column)),
    removeColumn: (column) => dispatch(removeColumn(column)),
    addColumn: (columnTitle) => dispatch(addColumn(columnTitle)),
    replaceTask: (draggedId, droppedId, column) => dispatch(replaceTask(draggedId, droppedId, column)) ,
    replaceColumn: (draggedId, droppedId) => dispatch(replaceColumn(draggedId, droppedId)) ,
    changeColumnTitle: (newTitle, column) => dispatch(changeColumnTitle(newTitle, column)) ,
    changeTask: (changeTaskTitle, changeTaskDescription, column, task) => dispatch(changeTask(changeTaskTitle, changeTaskDescription, column, task)) 
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  // {
  //   addTask,
  //   removeTask,
  //   removeColumn,
  //   addColumn,
  //   replaceTask,
  //   replaceColumn,
  //   changeColumnTitle,
  //   changeTask
  // }
)(App);
