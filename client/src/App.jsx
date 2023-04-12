import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {LoginPage} from "./Routes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
