import React from "react";
import UpBaar from "./components/UpBaar";
import Category from "./pages/Category";
import CategoryModal from "./components/CategoryModal";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <div className="box">
        <UpBaar />
      </div>
      <div className="bigbox">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<Category />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
