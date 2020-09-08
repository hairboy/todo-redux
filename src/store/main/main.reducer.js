import { TASK_ADD } from './main.actions'

const initialState = {
  tasks: [],
}

const handleTaskAdd = (state, action) => {
  if (action.text) {
    const newTask = {id: new Date(), content: action.text, isChecked: false,}
    const updatedTasks = [...state.tasks, newTask]

    return {
      ...state,
      tasks: updatedTasks,
    }
  }

  return state
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return handleTaskAdd(state, action);
    default: 
      return state
  }
  
}