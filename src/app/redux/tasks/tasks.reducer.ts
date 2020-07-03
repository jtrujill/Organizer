import {
  CREATE_TASK,
  CreateTaskAction,
  REMOVE_TASK,
  RemoveTaskAction,
  Task,
  TasksActionTypes,
  TasksState
} from './types';
import {apply, filter, fromPairs, pipe, toPairs} from 'ramda';

const initialState: TasksState = {
  byId: {}
};

function tasksReducer(state = initialState, action: TasksActionTypes): TasksState {
  switch (action.type) {
    case CREATE_TASK:
      const createTaskPayload = (action as CreateTaskAction).payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [createTaskPayload.name]: createTaskPayload
        }
      };
    case REMOVE_TASK:
      const removeTaskAction: RemoveTaskAction = action;
      const newById = pipe(
        toPairs,
        filter<[string, Task], 'array'>(apply((key) => key === removeTaskAction.payload.id)),
        fromPairs
      )(state.byId) as Record<string, Task>;
      return {
        ...state,
        byId: newById
      };
    default:
      return state;
  }
}

export {tasksReducer};
