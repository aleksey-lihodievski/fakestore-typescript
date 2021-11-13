import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'redux/selectors';

type Props = {
  path: string;
  redirectTo: string;
  children: any;
};

const PrivateRoute: React.FC<Props> = ({ path, children, redirectTo }) => {
  const authenticated: string | null = useSelector(getIsAuthenticated);

  if (authenticated) {
    return <Route path={path}>{children}</Route>;
  }

  return <Redirect to={redirectTo} />;
};

export default PrivateRoute;
