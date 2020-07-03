import {combineReducers, createStore} from 'redux';
import {tasksReducer} from './tasks/tasks.reducer';

const rootReducer = combineReducers({tasks: tasksReducer});

export const rootStore = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
