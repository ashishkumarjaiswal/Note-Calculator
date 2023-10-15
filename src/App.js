import React from "react";
import Calculator from "./Components/Calculator";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
