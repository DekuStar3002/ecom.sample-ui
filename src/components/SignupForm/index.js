import React, { useState } from 'react';
import './SignupForm.css';

function SignUpForm({ userType }) {
  console.log(userType);
  const [ signupData, setSignupData ] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    switch(event.target.name) {
      case 'name': setSignupData({ ...signupData, name: event.target.value }); break;
      case 'email': setSignupData({ ...signupData, email: event.target.value }); break;
      case 'password': setSignupData({ ...signupData, password: event.target.value }); break;
      default: ;
    }
  }

  const handleSubmit = () => {
    console.log(signupData);
  }

  return (
    <div className='signupform'>
      <p>Sign Up for { userType.toUpperCase() }</p>
      <div>
        <div>
          <p>Name: </p>
          <input type='text' value={signupData.name} name='name' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <p>Email: </p>
          <input type='email' value={signupData.email} name='email' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <p>Password: </p>
          <input type='password' value={signupData.password} name='password' onChange={(e) => handleChange(e)} />
        </div>
        <button onClick={handleSubmit} >Sign Up</button>
      </div>
    </div>
  )
}

export default SignUpForm;