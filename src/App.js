import React from "react";
import {  connect } from "react-redux";
import { addTask, removeColumn, removeTask, addColumn } from "./actions/Columns";
import AddColumn from "./components/AddColumns";
import Columns from "./components/Columns";
import "./styles/App.css"


function App ( {columns, addTask, removeColumn, removeTask, addColumn}) {
    
    return (
      <div id="Columns">
        <AddColumn onAddColumn={ (columnTitle) => addColumn(columnTitle) }/>
        <Columns  columns={ columns } 
                  onAddTask={(title, description, id)=> addTask(title, description, id) }
                  onRemoveColumn={ (column) => removeColumn(column)}
                  onRemoveTask={ (task, column) => removeTask(task, column) }
        />
      </div>
    )
  
}

const mapStateToProps = state => {
  return { columns: state.tasks.columns };
};



export default connect(
  mapStateToProps, 
  {
    addTask, 
    removeTask,
    removeColumn,
    addColumn
  }
)(App);
