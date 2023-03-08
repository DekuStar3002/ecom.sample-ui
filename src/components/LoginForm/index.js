import React, { useState } from 'react';
import { loginUser } from '../../constants/apiEndPoints';
import { makeRequest } from '../../utils';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginForm({ userType }) {
  const navigate = useNavigate();

  const [ loginData, setLoginData ] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    switch(event.target.name) {
      case 'email': setLoginData({ ...loginData, email: event.target.value }); break;
      case 'password': setLoginData({ ...loginData, password: event.target.value }); break;
      default: ;
    }
  }

  const handleLogin = async () => {
    const response = await makeRequest(loginUser(userType, loginData.email, loginData.password));
    console.log(response);
    if(!response) {
      navigate('/error');
      return;
    }
    localStorage.setItem('jwt_token', response.data.token);
    navigate('/home');
  }
  return (
    <div className='loginform'>
      <p>Login for {userType.toUpperCase()}</p>
      <div>
        <div>
          <p>Email: </p>
          <input type='email' value={loginData.email} name='email' onChange={(event) => handleChange(event)} />
        </div>
        <div>
          <p>Password: </p>
          <input type='password' value={loginData.password} name='password' onChange={(event) => handleChange(event)} />
        </div>
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  )
}

export default LoginForm;
