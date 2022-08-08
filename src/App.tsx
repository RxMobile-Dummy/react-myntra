import React from "react";
import HomePage from "./pages/home/HomePage";
import "./stylesheet/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbaar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import MainCategoryWiseProductPage from "./pages/categoryproduct/MainCategoryWiseProductPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import WishlistPage from "./pages/wishlist/WishlistPage";

function App() {
  return (
    <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/main-category/:mainCategory/:category"
          element={<MainCategoryWiseProductPage />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
