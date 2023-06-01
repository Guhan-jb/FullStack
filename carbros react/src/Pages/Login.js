import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Home from "./home";
export default function Login () {
const baseURL="http://localhost:8080/api/Vehicles"

  React.useEffect(() => {
    axios.get(`${baseURL}/login`).then((response) => {
      setPost(response.data);
    });
  }, []);
  const [email, setEmail] = useState('')
  const navigate=useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const user1 = { name, email, password }
  const [post, setPost] = useState('null');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errors = {
    email: "invalid username",
    password: "invalid password"
  };
  //console.log(post)
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );
    const handleEmail=(e)=>{
      setEmail(e.target.value);
     // console.log(email)
    }
    const handlePass=(e)=>{
      setPassword(e.target.value);
    }
    let userData="null";
  //const [userData,setUserData]=useState('null')
  const handleSubmit = (e) => {
    //Prevent page reload
    e.preventDefault();
    // Find user login info
    userData = post.find((user) => user.email === email);
    //console.log(userData);
    // Compare user info
    if (userData) {
      if (userData.password !== password) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
        console.log("success")
        navigate("/",{state:{name :userData.name}})
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };
  const handleClick = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(user1));
    axios.post(`${baseURL}/signup`, (user1)).then(res => console.log(res));
    
    navigate("/",{state:{name : name}})
  }
  let [authMode, setAuthMode] = useState(true)
  const changeAuthMode = () => {
    setAuthMode(!authMode)
  }
  return (
    <>
    { authMode?
      <>< div className = "Auth-form-container" >
      <div className="Auth-form">
        <div className="Auth-form-content">
          <form onSubmit={handleClick}>
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
        <div className="form-group mt-3">
          <label>Email </label>
          <input type="text" name="email" className="form-control mt-1" required onChange={handleEmail}  />
          {renderErrorMessage("email")}
        </div>
        <div className="form-group mt-3">
          <label>Password </label>
          <input type="password" name="password" className="form-control mt-1" required onChange={handlePass} />
          {renderErrorMessage("pass")}
        </div>
        <div className="d-grid gap-2 mt-3">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </div>
      </div >
</> 
  :

  <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="text-center">
          Already registered?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
            Sign In
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="e.g Jane Doe"
            value={name} onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>

  
}
<Outlet />
  </>
  )
  }