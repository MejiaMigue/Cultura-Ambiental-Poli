import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Reports from "./pages/Reports";
import ForgotPassword from "./pages/ForgotPassword";
import Events from "./pages/Events";
import Materials from "./pages/Materials";
import UserConfig from "./pages/UserConfig";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Materials" element={<Materials />} />
      <Route path="/UserConfig" element={<UserConfig />} />
    </Routes>
  );
};

export default App;


