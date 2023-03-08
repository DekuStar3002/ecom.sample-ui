import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

function CheckRoute({ children }) {
  const { user } = useParams();
  if( user !== 'customer' && user !== 'admin' ) {
    return <Navigate to='/notfound' replace />;
  }
  return children;
}

export default CheckRoute;