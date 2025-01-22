import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import EventsPage from './pages/EventsPage';
import ProgramsPage from './pages/ProgramsPage';
import DonatePage from './pages/DonatePage';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

import './index.css';


function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/teams" element={<TeamsPage/>} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/programs" element={<ProgramsPage/>} />
        <Route path="/donate" element={<DonatePage/>} />
        {/* These routes are for user authentication */}
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
  
      </Routes>
    
  );
}

export default App;
