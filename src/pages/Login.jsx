import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setToken, token }) {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (token) {
        navigate("/")
    }
  }, [token]); 
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`https://fsa-jwt-practie.herokuapp.com/signup`, formData)
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem("token", response.data.token)
            setToken(response.data.token);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
        <h1>Login to Use PuppyBowl</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleInput} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleInput} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
