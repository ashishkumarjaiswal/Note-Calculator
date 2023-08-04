import React from "react";
import Calculator from "./Components/Calculator";
import { Routes, Route } from "react-router-dom";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/new" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
