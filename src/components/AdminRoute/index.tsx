import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAdmin } from 'redux/selectors';

type Props = {
  path: string;
  redirectTo: string;
  children: any;
};

const AdminRoute: React.FC<Props> = ({ path, redirectTo, children }) => {
  const isAdmin: boolean = useSelector(getAdmin);

  if (isAdmin) return <Route path={path}>{children}</Route>;
  return <Redirect to={redirectTo} />;
};

export default AdminRoute;
