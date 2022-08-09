import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/Error";
import MovieDetails from "../Pages/Details/Details";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route element={<ErrorPage />} />
    </Routes>
  );
}
