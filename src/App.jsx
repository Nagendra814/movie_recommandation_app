import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Header from "../components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}
