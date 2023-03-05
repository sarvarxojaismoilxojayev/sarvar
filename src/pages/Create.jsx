import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/Create.css";
import Nav from "./Nav";

const Create = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    status: "",
    skills: [],
    website: "",
    campany: "",
    location: "",
    github: "",
    bio: "",
  });

  useEffect(() => {
    let token = localStorage.getItem("access-token");
    if (!token) navigate("/");

    // async function getMe() {
    //   try {
    //     let { data } = await axios.post("api/v1/profile", values);
    //     let { token } = data;
    //     localStorage.setItem("token", token);
    //     axios.defaults.headers.common["access-token"] = `${token}`;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getMe();
  }, []);

  function handleSocialLinks(e) {
    e.preventDefault();
    setOpen(!open);
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  async function SubmitFunction(e) {
    e.preventDefault();

    console.log(values);

    try {
      let { data } = await axios.post("/api/v1/profile", values);
      let { token } = data;
      axios.defaults.headers.common["access-token"] = `${token}`;
      toast("Profile Created Successflly", { type: "success" });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast(error.response.data?.msg, { type: "error" });
    }
  }

  return (
    <div>
      <Nav />
      <form onSubmit={SubmitFunction} className="container form-control-cl">
        <p className="text-danger">
          * = required field
        </p>
        <div className="inputs-control">
          <div>
          <p>* Work Status</p>
            <select
              className="input-style-clone"
              name="status"
              required
              value={values.status}
              onChange={handleInputChange}
            >
              <option value="">Select your work status</option>
              <option value="Open to work">Open to work</option>
              <option value="Open to hire">Open to hire</option>
              <option value="Looking for new opportunities">
                Looking for new opportunities
              </option>
            </select>
            <p className="opacity-50">Select the best option that fits you</p>
          </div>
          <span>
          <p>
          * Skills
            </p>
          <input
              className="input-style"
              type="text"
              name="skills"
              placeholder="HTML, CSS, JS"
              variant="outlined"
              required
              value={values.skills}
              onChange={handleInputChange}
            />
             <p className="opacity-50">
             Separate each skill with comma(,)
            </p>
          </span>
          <span>
          <p>
          Company
            </p>
          <input
              className="input-style"
              type="text"
              placeholder="Apple Inc."
              variant="outlined"
              name="campany"
              value={values.campany}
              onChange={handleInputChange}
            />
          </span>
          <span>
          <p>Location</p> 
            <input
              className="input-style"
              type="text"
              placeholder="One Apple Park Way; Cupertino, CA 95014, U.S.A."
              variant="outlined"
              name="location"
              onChange={handleInputChange}
              value={values.location}
            />
          </span>
          <span>
          <p>Could be your own or a company website</p>
          <input
              className="input-style"
              type="text"
              placeholder="apple.com"
              variant="outlined"
              name="website"
              value={values.website}
              onChange={handleInputChange}
            />
            <p className="opacity-50">You do not need to specify https protocol</p>
          </span>
          <span>
          <p className="opacity-70">
          Github user name
            </p>
            <input
              className="input-style"
              type="text"
              placeholder="GitHub Username"
              variant="outlined"
              name="github"
              onChange={handleInputChange}
              value={values.github}
            />
            <p className="opacity-50">
            You need to specify only username (without https://github.com)
            </p>
          </span>
          <span>
            <p>Bio</p>
            <textarea
              cols="142"
              rows="10"
              className="input-style textarea"
              placeholder="Tell us a little bit about yourself"
              onChange={handleInputChange}
              name="bio"
              value={values.bio}
            ></textarea>
            <p className="opacity-50">You may say about your recent experience or what you are up to.</p>
          </span>
          <span></span>
        </div>
        <button
          onClick={SubmitFunction}
          type="submit"
          className="btn btn-danger button-submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
