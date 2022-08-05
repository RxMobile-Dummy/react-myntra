import HomePage from "./pages/home/HomePage";
import "./stylesheet/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbaar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import MainCategoryWiseProductPage from "./pages/categoryproduct/MainCategoryWiseProductPage";

function App() {
  return (
    <Router>
      <Navbaar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route
          path="/main-category/:mainCategory/:category"
          element={<MainCategoryWiseProductPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
