import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Pages/SignUp";
import Login from "./Pages/LogIn";
import Forget from "./Pages/ForgetPassword";
import Reset from "./Pages/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
