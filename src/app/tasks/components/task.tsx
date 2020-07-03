import React, {FC} from 'react';
import {Task as TaskType} from '../../redux/tasks/types';

type Props = {
  task: TaskType;
};

export const Task: FC<Props> = ({task}) => {
  return <div>{task.name}</div>;
};
