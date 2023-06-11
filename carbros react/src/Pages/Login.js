import {React ,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
  const baseURL = "http://localhost:8080/api/user";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPost] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();
  const errors = {
    email: "Invalid username",
    password: "Invalid password",
  };

  const user1 = { email, name, password };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${baseURL}/login`, user1)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
      });
    console.log(post);
    if (post !== "invalid Email") {
      if (post === "invalid password") {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        localStorage.setItem("Email", email);

        navigate("/");
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    const user1 = { name, email, password };
    axios
      .post(`${baseURL}/signup`, user1)
      .then((res) => {
        console.log(res);
        navigate("/", { state: { email: email } });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  let [authMode, setAuthMode] = useState(true);
  const changeAuthMode = () => {
    setAuthMode(!authMode);
  };

  return (
    <>
      {authMode ? (
        <div className="Auth-form-container">
          <div className="Auth-form">
            <div className="Auth-form-content">
              <form onSubmit={handleSubmit}>
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control mt-1"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {renderErrorMessage("email")}
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {renderErrorMessage("password")}
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
              </form>
              <p className="text-center mt-2">
                Forgot <Link to="#">password?</Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
