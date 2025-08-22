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
      <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Job Application Portal</h1>
        <nav className='space-x-4'>
          <Link to="/" className="hover:underline">Home</Link>
            <Link to="/applications" className="hover:underline">Applications</Link>
            <Link to="/profile" className="hover:underline">Profile</Link>
        </nav>
      </header>
      <main className='flex-1 p-6'>
        {/* Routes will be defined here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/applications" element={<ApplicationList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  </Router>
  )
}

export default App
