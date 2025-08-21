import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import React from 'react';
import JobDetails from "./pages/JobDetails";
import ApplicationList from "./pages/ApplicationList";
import Profile from "./pages/Profile";
import './App.css'

function App() {
  
  return (
  <Router>
    <div>
      <header>
        <h1>Job Application Portal</h1>
        <nav className='space-x-4'>
          <Link>Home</Link>
          <Link>Applications</Link>
          <Link>Profile</Link>
        </nav>
      </header>
      <main>
        {/* Routes will be defined here */}
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
      </main>
    </div>
  </Router>
  )
}

export default App
