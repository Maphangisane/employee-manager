import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.jsx';
import Registration from './components/Registration';

function App() {
  const [employees, setEmployees] = useState([]);
  const [personData, setPersonData] = useState({});
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await fetch('http://localhost:5000/profiles')
        if(response.ok){
          console.log('data collected sucessfully')
          const data = await response.json()
          setEmployees(data)
        }else{
          console.log('error with fetching data')
        }
      }catch(error){
        console.log(error);
      }
    }
    fetchData()
    return () => {
      console.log('component unmounted')
    }
}, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home employees={employees} setEmployees={setEmployees}
         personData={personData}  setPersonData={setPersonData}  setIsEditing={setIsEditing}/>} />
        <Route path="/Dashboard" element={<Dashboard personData={personData} setPersonData={setPersonData} setIsEditing={setIsEditing}/>} />
        <Route path="/Registration" element={<Registration personData={personData} setPersonData={setPersonData}
          isEditing={isEditing} />} />
      </Routes>
    </Router>
  );
}

export default App;
