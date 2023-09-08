import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';
import Registration from './components/Registration';

function App() {
  const [employees, setEmployees] = useState({
    email: 'siyabongaterrence0@gmail.com',
    password: 'siya4547',
    name: 'Siyabonga',
    surname: 'Madonsela',
    id: 21
    }
    );
  const [personData, setPersonData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home employees={employees} setEmployees={setEmployees} personData={personData}  setPersonData={setPersonData} />} />
        <Route path="/Dashboard" element={<Dashboard personData={personData} />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
