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
    <div className='min-h-screen flex flex-col'>
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
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/applications" element={<ApplicationList />} />
        <Route path="/profile" element={<Profile />} />
      </main>
    </div>
  </Router>
  )
}

export default App
