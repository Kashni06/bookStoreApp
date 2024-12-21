import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";  // Import Navigate
import Home from './home/Home';
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./contact/Contact";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";  // Ensure useAuth is imported correctly

function App() {
  const [authUser, setAuthUser] = useAuth();  // Get authUser state from context
  console.log(authUser);  // You can remove this if you don't need to log it

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/Course" 
            element={authUser ? <Courses /> : <Navigate to="/signup" />} 
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Toaster /> {/* Toast notifications */}
      </div>
    </>
  );
}

export default App;
