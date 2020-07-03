// selector
import {RootState} from '../index';
import {createSelector} from 'reselect';
import {values} from 'ramda';

const tasksById = (state: RootState) => state.tasks.byId;

export const getTasks = createSelector([tasksById], (tasksById) => values(tasksById));
