axios.defaults.baseURL = "https://nt-jobify.onrender.com";
axios.defaults.headers.common["Content-Type"] = "aplication/json";
let token = localStorage.getItem("token")
if (token) axios.defaults.headers.common["x-auth-token"] = `${token}`;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Route>
    <App />
    <ToastContainer theme="colored" />
  </Route>
);
