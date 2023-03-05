import {React, useEffect}from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

export default function Header() {

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("access-token");
    if (token) navigate("/dashboard");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="items">
          <h1 className="text-light title title-header">
            Find the <span className="text-danger">best</span> opportunities
            with <span className="text-danger">us</span>
          </h1>
          <p className="discription text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            aspernatur fugiat architecto nostrum deleniti qui in modi sit eaque
            illo unde magnam sed similique rem placeat, totam itaque alias sunt.
          </p>
          <div className="buttons">
            <Link className="btn bg-danger text-light" to={"/register"}>
              Register
            </Link>
            <Link className="btn btn-outline-danger link" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="tanirovka"></div>
    </div>
  );
}
