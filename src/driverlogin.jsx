import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gl from './assets/gl.mp4';
import Header from './header';

function DriverLogin() {
  const [form, setForm] = useState({name:"", email:"", password:""});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newerrors = {};
    if (!form.name.trim()) newerrors.name = "name is required";
    if (!form.email.includes("@")) newerrors.email = "valid email is required";
    const password = form.password;
    const specialCharRegex = /[!@#$%^&*]/;
    const numberRegex = /[0-9]/;
    if (!password) newerrors.password = "password is required";
    else if (password.length < 7) newerrors.password = "password must be at least 7 characters long";
    else if (!specialCharRegex.test(password)) newerrors.password = "password must contain at least one special character (!@#$%^&*)";
    else if (!numberRegex.test(password)) newerrors.password = "password must contain at least one number";
    return newerrors;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Driver logged in successfully");
      localStorage.setItem("driver", JSON.stringify(form));
      setForm({ name:"", email:"", password:"" });
      navigate("/DriverDashboard");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <Header />
    <div className="login-container-u">
      <div className="form-video">
        <div className="animation">
          <video src={gl} autoPlay loop muted />
        </div>
        <div className="form">
              <h2>Driver Login</h2>
            <form autoComplete='off' onSubmit={handlesubmit}>
            <div>
              <div className="label">Name:</div>
              <div className="input-container">
                <input type="text" name="name" value={form.name} onChange={handlechange} />
              </div>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <div className="label">Email:</div>
              <div className="input-container">
                <input type="email" name="email" value={form.email} onChange={handlechange} />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <div className="label">Password:</div>
              <div className="input-container">
                <input type="password" name="password" value={form.password} onChange={handlechange} />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="ud-b">
              <button type="submit">Login</button>
            </div>
            </form>
          </div>
        </div> 
      </div>
    </>
  );
}

export default DriverLogin;
