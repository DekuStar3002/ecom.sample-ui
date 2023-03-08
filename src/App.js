import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage, LoginPage, NotFoundPage, ErrorPage } from './pages';
import { CheckRoute, ProtectedRoute } from './helpers';
import { Footer } from './components';
function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/:user/signup' element={<CheckRoute><SignUpPage /></CheckRoute>} />
          <Route path='/:user/login' element={<CheckRoute><LoginPage /></CheckRoute>} />
          <Route path='/home' element={<ProtectedRoute><Footer /></ProtectedRoute>} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
