import React from "react";
import { Routes, Route } from "react-router-dom";
import Elements from "./Components/Elements";
import Header from "./Components/Header";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <hr></hr>
        <div>
          <Routes>
            <Route path="/:selectDate" element={<Elements />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
