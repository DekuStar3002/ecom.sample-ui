import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('jwt_token');
  if(!token) {
    return <Navigate to='/error' replace />;
  }
  return children;
}

export default ProtectedRoute;
