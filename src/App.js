import Home from "./Components/Home/home";
import SignUp from "./Components/Signup/SignUp";
import LogIn from "./Components/Login/logIn";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import MainHomePage from "./Eshop-MainPage/Components/Home/Home";
import UserRegistrations from "./Eshop-MainPage/Components/userRegistration/UserRegistration"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainHomePage />}></Route>
          <Route path="/seller" element={<Home />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/logIn" element={<LogIn />}></Route>
          <Route path="/adminPanel" element={<AdminPanel />}></Route>
          <Route path="/UserRegistrations" element={<UserRegistrations />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
