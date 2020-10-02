export const TASK_ADD = 'TASK_ADD';
export const TASK_DELETE = 'TASK_DELETE';
export const DELETE_ALL = 'DELETE_ALL';
export const TASK_TOGGLE = 'TASK_TOGGLE';
export const FILTERTYPE_SWITCH = 'FILTERTYPE_SWITCH';
export const VISIBLE_CHECKED = 'VISIBLE_CHECKED';

export const setFilter = (filter) => ({
  type: FILTERTYPE_SWITCH,
  filter,
})

export const taskAdd = (text) => ({
  type: TASK_ADD,
  text,
})

export const taskDelete = (id) => ({
  type: TASK_DELETE,
  id,
})

export const deleteAll = (task) => ({
  type: DELETE_ALL,
  task,
})

export const toggleTask = (id, isChecked) => ({
  type: TASK_TOGGLE,
  payload: { id, isChecked },
})

export const showCheckedTask = (task, isChecked) => ({
  type: VISIBLE_CHECKED,
  payload: { task, isChecked }
})