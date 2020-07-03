export interface TasksState {
  byId: Record<string, Task>;
}

export interface Task {
  name: string;
}

export const CREATE_TASK = 'CREATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export interface CreateTaskAction {
  type: typeof CREATE_TASK;
  payload: Task;
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: {
    id: string;
  };
}

export type TasksActionTypes = CreateTaskAction | RemoveTaskAction;
