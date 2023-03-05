import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../styles/Login.css'

const Register = () => {
  const navigate = useNavigate();

  const [value, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  useEffect(() => {
    let token = localStorage.getItem("access-token");
    if (token) navigate("/dashboard");
  }, []);

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (value.password !== value.confirmedPassword) {
      toast("Passwords do not match", { type: "error" });
      return;
    }

    try {
      let { data } = await axios.post("/api/v1/users", value);
      let { token } = data;
      localStorage.setItem("access-token", token);
      axios.defaults.headers.common["access-token"] = `${token}`;
      toast("Success", { type: "success" });
      navigate("/dashboard");
    } catch (error) {
      toast(error.response.data.errors[0].msg, { type: "error" });
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister} className="container-lg register">
        <span className="h1 text-center d-block">Register</span>
        <div className="inputs">
          <span className="h3 input-title">Your name</span>
          <input
            name="name"
            required
            id="outlined-basic1"
            type="text"
            variant="outlined"
            value={value.name}
            onChange={handleInputChange}
            className="input-sarvar"
          />
            <span className="h3 input-title">Your email</span>
            <input
              name="email"
              required
              id="outlined-basic2"
              type="email"
              variant="outlined"
              value={value.email}
              onChange={handleInputChange}
              className="input-sarvar"
            />
          <span className="h3 input-title">Your password</span>
          <input
            name="password"
            min={6}
            required
            id="outlined-basic3"
            type="password"
            variant="outlined"
            value={value.password}
            onChange={handleInputChange}
            className="input-sarvar"
          />
          <span className="h3 input-title">Your password</span>
          <input
            name="confirmedPassword"
            min={6}
            required
            id="outlined-basic4"
            type="password"
            variant="outlined"
            value={value.confirmedPassword}
            onChange={handleInputChange}
            className="input-sarvar"
          />
        </div>
        <button type="submit" className="button-register btn btn-danger">
          Register
        </button>
        <div className="buttom-text">
        Already have an account?
      <Link className="text-danger"to="/login" style={{ textDecoration: "none", marginLeft: "10px" }}>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
