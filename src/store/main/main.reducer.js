import { TASK_ADD, TASK_DELETE, DELETE_ALL, TASK_TOGGLE, FILTERTYPE_SWITCH  } from './main.actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  filterType: 'all',
}

const saveTasks = tasks => localStorage.setItem('tasks', JSON.stringify(tasks))

const handleTaskAdd = (state, action) => {
  if (action.text) {
    const newTask = {id: new Date(), content: action.text, isChecked: false,}
    const updatedTasks = [...state.tasks, newTask]

    saveTasks(updatedTasks)

    return {
      ...state,
      tasks: updatedTasks,
    }
  }

  return state
}

const handleDeleteTask = (state, action) => {
  if (action.id) {
    const updatedTasks = state.tasks.filter(task => task.id !== action.id)

    saveTasks(updatedTasks)

    return {
      ...state,
      tasks: updatedTasks,
    }
  }

  return state
}

const handleDeleteAllTask = (state, action) => {
  if (action.task) {
    return {
      ...state,
      tasks: [],
    }
  }

  return state
}

const handleTaskToggle = (state, action) => {
  if (action.payload.id) {
    const updatedTasks = state.tasks.map(task => task.id === action.payload.id ? ({ ...task, isChecked: !action.payload.isChecked }) : task)

    saveTasks(updatedTasks)

    return {
      ...state,
      tasks: updatedTasks
    }
  }

  return state  
}

const switchFilterType = (state, action) => ({
  ...state,
  filterType: action.filter,
})

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return handleTaskAdd(state, action);
    case TASK_DELETE:
      return handleDeleteTask(state, action);
    case DELETE_ALL:
      return handleDeleteAllTask(state, action);
    case TASK_TOGGLE:
      return handleTaskToggle(state, action);
    case FILTERTYPE_SWITCH:
      return switchFilterType(state, action);    
    default: 
      return state
  }
  
}