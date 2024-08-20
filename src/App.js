import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/common/Navbar';

// Page's
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// open and close route 
import OpenRoute from './components/core/Auth/OpenRoute';

// Login and Signup
import Login from './pages/Login';
import Error from './components/common/Error';
import Signup from './pages/Signup'

import { ACCOUNT_TYPE } from './utils/constants';

import LoadingBar from 'react-top-loading-bar'
import { setProgress } from './slice/loadingbarSlice';
import VerifyEmail from './pages/VerifyEmail';

function App() {
  return (
    <div className='w-screen relative min-h-screen max-w-[100vw] bg-maincolor-first flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Error />} />

        <Route path='signup'
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route path='login'
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route path='verify-email'
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;
