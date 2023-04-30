import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Messages from './Messages';
import NavBar from './NavBar';
import Signup from './Signup';
import About from './About';

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/about" element={<About />}  />
                <Route path="/login" element={<Login />}  />
                <Route path="/messages" element={<Messages />}  />
                <Route path="/signup" element={<Signup />}  />
            </Routes>
        </div>
    )
}
export default App;