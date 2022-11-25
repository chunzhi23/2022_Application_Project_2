import React, { Component } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginResult from "./pages/LoginResult";
import NotFound from "./pages/NotFound";

function App() {
  let login = false;
  const LoginCondition = login ? <Navigate replace to="/" /> : <Login />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/*" element={LoginCondition}>
          <Route path="success" element={<LoginResult />}></Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
