import { ADD_COLUMN, ADD_TASK, REMOVE_COLUMN, REMOVE_TASK } from "../actions/types"

const initialState =  {
    columns: [ 
        {
            title: "TO DO",
            id: Math.random(),
            tasks: []
        },
        {
            title: "In Progress",
            id: Math.random(),
            tasks: []
        },
        {
            title: "Ready",
            id: Math.random(),
            tasks: []
        },
        {
            title: "Ready To Publish",
            id: Math.random(),
            tasks: []
        },
        {
            title: "Published",
            id: Math.random(),
            tasks: []
        }
    ]
}



export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_TASK:
            return { 
                ...state, 
                columns: state.columns.map(column => {
                    if (column.id === action.id) {
                        let last_id = column.tasks.length > 0 ? column.tasks[column.tasks.length - 1].id : 0;

                        let date = new Date()
                        let formatter = new Intl.DateTimeFormat("en", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })

                        return {...column, tasks: [...column.tasks, {
                            id: last_id + 1, 
                            title: action.title, 
                            description: action.description,
                            date: formatter.format(date)
                        }]}
                    }
                    return column
                }) 
            }

        case REMOVE_COLUMN:
            return {
                ...state,
                columns: state.columns.filter((column) => {
                    return column.id !== action.column.id
                })
            }

        case REMOVE_TASK: 
        
            return {
                ...state,
                columns: state.columns.map( (column) => {
                        if(column.id === action.column.id) {
                            return {
                                ...column,
                                tasks: column.tasks.filter((task) => {
                                    return task.id !== action.task.id
                                })
                            }
                        }else{
                            return column
                        }
                    }
                )
            }
               
            case ADD_COLUMN:
                return {
                    ...state,
                    columns: [
                        ...state.columns,
                        {
                            title: action.columnTitle,
                            id: Math.random(),
                            tasks: []
                        }
                    ]
                }
        default:
            return state;
    }
}
