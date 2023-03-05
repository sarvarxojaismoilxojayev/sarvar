import axios from "axios";
import React, { useEffect, useState, useRef} from "react";
import { useNavigate, Link} from "react-router-dom";
import Nav from "./Nav";
import '../styles/Profile.css'

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [data, setData] = useState([])
   useEffect(() => {
    let token = localStorage.getItem("access-token");
    if (!token) navigate("/");

      axios.defaults.headers.common["access-token"] = `${token}`;
      axios.get("/api/v1/auth")
        .then((res) => {
          setUser(res.data)
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  useEffect(() => {
           function api() {
            let api = axios.get(`api/v1/profile/me`).then((res) => setData(res))
            console.log(data);
          }
          api()
        },[])

        




  return (
    <div>
      <Nav />
      <div className="repository container">
       <span className="h1">Hello, <span>{user?.name}</span></span>
       <div className="internal">You have not created an profile yet.</div>
       <Link className="btn btn-danger" to={"/create-profile"}>Create Profile</Link>
      </div>
      <p className="container h1 mt-4">Your Profile </p>
      <div className="item container">
        <img src={user.avatar} alt="" className="item-img"/>
        <div>
          <li className="list-item">Email: {user?.email}</li>
          <li className="list-item">Stattus: {data?.data?.status}</li>
          <li className="list-item">Location: {data?.data?.location}</li>
          <li className="list-item">Bio: {data?.data?.bio}</li>
          <li className="list-item">Joined at: {data?.data?.date}</li>
        </div>
        <div>
          <li className="list-item">Website: <span className="text-decoration-underline text-primary">{data?.data?.website}</span></li>
          <li className="list-item">Skills: {data?.data?.skills.map((i) => {
            return (
              <div key={crypto.randomUUID()}>

                <li ><i className="fa-sharp fa-solid fa-check"></i>{i}</li>
              </div>
            )
          })}</li>
        </div>
      </div>
    </div>
  );
}
