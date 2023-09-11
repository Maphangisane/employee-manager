import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import Dashboard from './Dashboard.jsx';
import Registration from './Registration';


const Home = ({ employees, setPersonData, personData , setIsEditing}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const redirectToDashboard =(employee)=>{
    alert('Login successful')
    setPersonData(employee)
    navigate('/Dashboard') 
  }

  function handleLogin(e) { 
    e.preventDefault(); // Prevent the form from submitting normally

    // Perform authentication or login logic here
    const employee = employees.find((employee) =>
    email === employee.email && password === employee.password
  );

      if (employee) {
       redirectToDashboard(employee);
  } else {alert('Login failed'); }
}

   function handleReg(){
     
    navigate('/Registration');
    setIsEditing(false)

   }

  return (
   <>
    <div className='Container'>
  <div className="login-card">
  <div className="card-header">
    <div className="log">Login</div>
  </div>
  <form>
    <div className="form-group">
      <label for="username">Username:</label>
      <input required="" name="username" id="username" type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <label for="password">Password:</label>
      <input required="" name="password" id="password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div className="form-group">
      <input value="Login" type="submit" onClick={handleLogin}/>
      <input value="Register" type="submit" onClick={handleReg}/>
    </div>
  </form>
</div>
</div>
   </>
 
   
  );
};


export default Home;
