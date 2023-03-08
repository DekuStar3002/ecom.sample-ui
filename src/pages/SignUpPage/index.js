import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, SignUpForm } from '../../components';

function SignUpPage() {
  const { user } = useParams();
  return (
    <div>
      <Header />
      <SignUpForm userType={user}/>
    </div>
  )
};

export default SignUpPage;
