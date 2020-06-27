import React, {FC} from 'react';
import {environment} from '../../environments/environment';

export const Login: FC = () => {
  return <div>{environment.production ? 'Production' : 'Dev'}</div>;
};
