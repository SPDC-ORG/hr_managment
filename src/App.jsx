// App.jsx
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Task from './Components/Task';
import NotFound from './Components/NotFound';
import WorkHistory from './Components/WorkHistory';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Contact from './Components/ContactUs/Contact';
import PerformancePage from './Components/Performance';
import Premium from './Components/Premium/Premium';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path='/Workhistory' element={<WorkHistory/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<SignUp/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/performance' element={<PerformancePage/>} />
        <Route path='/Premium' element={<Premium/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

