import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Notfaund from './pages/Notfaund'
import Explore from "./pages/Explore";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/dashboard" element={<Profile />} />
        <Route path="/create-profile" element={<Create />} />
        <Route path="/explore" element={<Explore  />}/>
        <Route path="/my-job" />
        <Route path="/*" element={<Notfaund/>}/>
      </Routes>
    </div>
  );
}

export default App;
