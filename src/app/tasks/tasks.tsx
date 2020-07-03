import React, {ChangeEvent, FC, useState} from 'react';
import {isEmpty} from 'ramda';
import {Task} from './components/task';
import {RootState} from '../redux';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {getTasks} from '../redux/tasks/selectors';
import {createTask} from '../redux/tasks/actions';

type Props = {
  tasks?: string[];
};

const mapStateToProps = (state: RootState) => ({
  tasks: getTasks(state)
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export const Tasks: FC<Props> = connector(({tasks}: PropsFromRedux) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(createTask(taskName));
    setTaskName('');
  };

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      <input value={taskName} onChange={onInput} />
      <button onClick={addTask} disabled={isEmpty(taskName)}>
        Add Task
      </button>
      <div>{isEmpty(tasks) ? <div>Empty</div> : tasks.map((task, i) => <Task key={i} task={task} />)}</div>
    </div>
  );
});
