import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import State from "./AssetContex/State";
import Navigation from "./Comp/Navigation";
import Home from "./Comp/Home";
import About from "./Comp/About";
import { Alert } from "./Comp/Alert";
import SignUp from "./Comp/Authantication/SignUp";
import Login from "./Comp/Authantication/Login";
function App() {
  return (
    <div className="App">
      <State>
        <BrowserRouter>
          <Navigation />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </State>
    </div>
  );
}

export default App;
