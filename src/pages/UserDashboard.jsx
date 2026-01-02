import { useState } from 'react';
import Navbar from '../components/Navbar'

function UserDashboard() {
  const [requests,setRequests]=useState([]);
  const [form,setForm]=useState({name:"",vehicle:"",days:"",pickup:"",drop:"",contact:""});
  const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
    const newreq={...form,status:"Pending"};
    const updatedreqs=[...requests,newreq];
    setRequests(updatedreqs);
    localStorage.setItem("requests",JSON.stringify(updatedreqs));
    setForm({name:"",vehicle:"",days:"",pickup:"",drop:"",contact:""});
  };

  return (
    <>
    <Navbar/>
    <div className="login-container-u">
      <h1>Hire Driver</h1>
      <div className="form">
        <form autoComplete="off" onSubmit={handlesubmit}>
          <div>
            <div className="label">Name:</div>
            <div className="input-container">
              <input type="text" name="name" value={form.name} onChange={handlechange}/>
            </div>
          </div>
          <div>
          <div className="label">Vehicle:</div>
          <div className="input-container">
            <select name="vehicle" value={form.vehicle} onChange={handlechange}>
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="truck">Truck</option>
            </select>
          </div>
          </div>
          <div>
          <div className="label">Days:</div>
          <div className="input-container">
            <input type="text" name="days" value={form.days} onChange={handlechange}/>
          </div>
          </div>
          <div>
          <div className="label">Pickup Location:</div>
          <div className="input-container">
            <input type="text" name="pickup" value={form.pickup} onChange={handlechange}/>
          </div>
          </div>
          <div>
          <div className="label">Drop Location:</div>
          <div className="input-container">
            <input type="text" name="drop" value={form.drop} onChange={handlechange}/>
          </div>
          </div>
          <div>
          <div className="label">Contact:</div>
          <div className="input-container">
            <input type="text" name="contact" value={form.contact} onChange={handlechange}/>
          </div>
          </div>
          <div className="ud-b">
            <button type="submit">Request Driver</button>
          </div>
        </form>
      </div>
      <div className="requests">
        <h3>My Requests</h3>
        <ul>
          {requests.map((req,index)=>(
            <li key={index}>
              <p>{req.name}-{req.vehicle}-{req.days} days-{req.pickup}-{req.drop}</p>
              <p>Status: <span style={{ fontWeight: "bolder" }}>{req.status}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}
export default UserDashboard
