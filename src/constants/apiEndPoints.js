const BACKEND_URL = 'http://localhost:5005';

const loginUser = (user, email, password) => {
  return {
    baseURL: BACKEND_URL,
    url: `/api/${user}/login`,
    method: 'post',
    data: {
      email,
      password
    }
  };
};

export { loginUser };