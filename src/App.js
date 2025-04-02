import "./App.css"; 
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const togglePage = () => {
    setShowLogin(!showLogin);
    navigate(showLogin ? "/register" : "/login");
  };

  return (
    <div>
      <h1>Welcome to DreamWeaver</h1>
      <button onClick={togglePage}>
        {showLogin ? "Go To Register" : "Go To Login"}
      </button>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Login />} /> {/* Default to login */}
      </Routes>
    </div>
  );
}

export default App;
