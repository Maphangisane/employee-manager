import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import Dashboard from './Dashboard.js';
import Registration from './Registration';



const Home = ({ employees, setPersonData, personData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();

  function handleLogin(e) { 
    e.preventDefault(); // Prevent the form from submitting normally

    // Perform authentication or login logic here

    if (email === employees.email && password === employees.password) {
      // Successful login
     
      alert('Login successful');

      setPersonData({
         name: employees.name,
         surname: employees.surname,
         email:employees.email
      })
     
      
      console.log(personData);

      navigate('/Dashboard');

    } else {
      // Failed login
      alert('Login failed');
    
    }
  
}

   function handleReg(){
     
    navigate('/Registration');

   }

  return (
   
  <div className='Container'>
  <div class="login-card">
  <div class="card-header">
    <div class="log">Login</div>
  </div>
  <form>
    <div class="form-group">
      <label for="username">Username:</label>
      <input required="" name="username" id="username" type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input required="" name="password" id="password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div class="form-group">
      <input value="Login" type="submit" onClick={handleLogin}/>
      <input value="Register" type="submit" onClick={handleReg}/>
    </div>
  </form>
</div>
</div>
   
  );
};


export default Home;
