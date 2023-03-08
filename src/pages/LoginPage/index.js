import React from 'react'
import { useParams } from 'react-router-dom'
import { Header, LoginForm } from '../../components';

function LoginPage() {
  const { user } = useParams();
  localStorage.removeItem('jwt_token');
  return (
    <div>
      <Header />
      <LoginForm userType={user} />
    </div>
  )
}

export default LoginPage;
