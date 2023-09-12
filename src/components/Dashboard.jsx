//profile info 
import React,{useState,useEffect} from 'react'
import './dashboard.css'
import {useNavigate } from 'react-router-dom';


const Dashboard = ({personData, setEdit , setIsEditing , setPersonData}) => {
  const [editdata, seteditdata] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const collectData = async()=>{
        try{
            const response = await fetch('http://localhost:5000/profile')
            if(response.ok){
                console.log('data collected sucessfully')
                const data = await response.json()
                seteditdata(data)
            }else{
                console.log('there is problem with collecting data')
            }
        }catch(error){
            console.log(error)
        }
    }
    collectData()
    return () => {
      console.log('component remounted')
    }
  }, []);    
  function userIndex(){
    const employeeId = 2;
    for (let i = 0; i < editdata.length; i++) {
        if(editdata[i].id === 2){
            return i;
        }
    }
  }

  const deleteInfo = async() =>{
    const serverURL = 'http://localhost:5000/profiles'; 
    fetch(`${serverURL}/${personData.id}`,{
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response =>{
      if(!response.ok){
        throw new Error(`status ${response.status}`)
      }
    })
    .then(()=>{console.log('data deleted succussfully')})
    .catch(error =>{
      console.error('Error deleting data', error)
    })
    setPersonData('')
    navigate('/')
  }

  const handleChange = () =>{
     
    navigate('/Registration')
    setIsEditing(true)
  }
  
  return (
    <>
    <div className="edit-box">
       <div className="edit_title">
            <h1>{personData.name}</h1>
            <p>{personData.profession}</p>
       </div>
       <div className="contact-details">
         <p><i className="fa-solid fa-phone"></i>{personData.phone}</p>
         <p><i className="fa-regular fa-envelope"></i>{personData.email}</p>
       </div>
       <div className="change-profile">
          <p> <i className="fa-regular fa-pen-to-square" onClick={handleChange} ></i> Edit</p>
          <p><i className="fa-solid fa-trash-can" onClick={()=>deleteInfo()} ></i>delete</p>
       </div>
    </div>
    </>
  )
}

export default Dashboard;