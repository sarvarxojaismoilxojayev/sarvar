import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  
  const navigate = useNavigate();

  const [value, setValues] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    let token = localStorage.getItem("access-token");
    if (token) navigate("/dashboard");
  },[]);

  async function Login(e) {
    e.preventDefault();

    try {
      let { data } = await axios.post("/api/v1/auth", value);
      let { token } = data;
      localStorage.setItem("access-token", token);
      axios.defaults.headers.common["access-token"] = `${token}`;
      toast("Logged In Successflly", { type: "success" });
      navigate("/dashboard");
    } catch (error) {
      toast(error.response.data.errors[0].msg, { type: "error" });
    }
  }

  function Input(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }


  return (
    <div>
      <div className="container-lg enter">
      <form onSubmit={Login} className=" register clone">
        <div className="inputs">
        <span className="h1 text-center d-block">Login</span>
        <span className="h3 input-title">Your email</span>
            <input
              id="outlined-basic2"
              name="email"
              type="email"
              variant="outlined"
              value={value.email}
              onChange={Input}
              className="input-sarvar"
            />
          <span className="h3 input-title">Your password</span>
          <input
            id="outlined-basic3"
            name="password"
            type="password"
            variant="outlined"
            value={value.password}
            onChange={Input}
            className="input-sarvar"
          />
        </div>
        <button type="submit" className="button-register btn btn-danger" style={{marginBottom: '30px'}}>
          Log In
        </button>
        <p className="uttom-text text-center">
          Don't have an account yet?{" "}
          <Link className="text-danger" to="/register" style={{textDecoration: 'none', marginLeft: '10px'}}>
            Sign Up
          </Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;