import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage, SignUpPage } from "./Routes/Routes.js";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
