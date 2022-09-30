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
import AccountPage from "./pages/account/AccountPage";
import Addresses from "./components/addresses/Addresses";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/editprofile/EditProfile";
import SavedCards from "./components/cards/SavedCards";
import AddCard from "./components/cards/addcard/AddCard";
import BagPage from "./pages/bag/BagPage";
import AddressPage from "./pages/selectaddress/AddressPage";
import PaymentPage from "./pages/payment/PaymentPage";
import ProductDetails from "./pages/productdetails/ProductDetails";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import ForgetPasswordPage from "./pages/forgotpassword/ForgetPasswordPage";

function App() {
  return (
    // <ApolloProvider client={client}>

    <Router>
      <NotificationContainer />
      <Navbaar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forget-password" element={<ForgetPasswordPage />}></Route>
        <Route path="/bag" element={<BagPage />}></Route>
        <Route path="/select-address" element={<AddressPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route
          path="/main-category/:mainCategory/:category"
          element={<MainCategoryWiseProductPage />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<AccountPage />}>
          <Route index element={<Profile />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="cards" element={<SavedCards />} />
          <Route path="cards/addcard/:id" element={<AddCard />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
    // </ApolloProvider>
  );
}
export default App;
