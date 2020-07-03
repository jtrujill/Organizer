import {CREATE_TASK, REMOVE_TASK, TasksActionTypes} from './types';

export function createTask(name: string): TasksActionTypes {
  return {
    type: CREATE_TASK,
    payload: {name}
  };
}

export function removeTask(id: string): TasksActionTypes {
  return {
    type: REMOVE_TASK,
    payload: {id}
  };
}
