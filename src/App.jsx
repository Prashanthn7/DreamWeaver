import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import DreamList from "./Components/DreamList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/dreams" element={<PrivateRoute> <DreamList /> </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ children }) => {
  localStorage.setItem('token', 'hello')
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default App;
