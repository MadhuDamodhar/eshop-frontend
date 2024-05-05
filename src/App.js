import Home from "./Components/Home/home";
import SignUp from "./Components/Signup/SignUp";
import LogIn from "./Components/Login/logIn";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/logIn" element={<LogIn />}></Route>
          <Route path="/adminPanel" element={<AdminPanel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
