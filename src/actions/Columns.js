import {ADD_COLUMN, ADD_TASK, REMOVE_COLUMN, REMOVE_TASK} from "./types";

export const addTask = (title, description, id ) => dispatch => {

    dispatch({
        type: ADD_TASK,
        title,
        description,
        id
    })
};

export const removeColumn = (column) => dispatch => {

    dispatch({
        type: REMOVE_COLUMN,
        column
    })
};

export const removeTask = (task, column) => dispatch => {

    dispatch({
        type: REMOVE_TASK,
        task,
        column
    })
}

export const addColumn = (columnTitle) => dispatch => {

    dispatch({
        type: ADD_COLUMN,
        columnTitle
    })
}