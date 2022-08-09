import React, { useEffect, useState, Component, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "../../components/categoryproduct/Product";
import { FaSlidersH, FaTimes } from "react-icons/fa";
import Filter from "../../components/categoryproduct/Filter";
import "./MainCategory.css";
import { bestProducts } from "../../constants/Products";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const MainCategoryWiseProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [brands, setBrands] = useState([]);
  const [isFiltershow, setFiltershow] = useState(false);
  const navigate = useNavigate();

  const handleMove = () => {
    navigate(`/product-details/12`);
    // console.log(ele)
  };

  const getData = async () => {
    try {
      setLoading(true);
      //above line uncomment for real data
      // let products = bestProducts;
      // products = products.filter(
      //   (product) =>
      //     product.category.categoryName.toLowerCase() ===
      //       this.state.category.toLowerCase() &&
      //     product.mainCategory.mainCategoryName.toLowerCase() ===
      //       this.state.mainCategory.toLowerCase()
      // );

      if (products.length === 0) {
        setFilteredProducts([]);
        setMinPrice(0);
        setMaxPrice(0);
        setPrice(0);
        setLoading(false);
        setBrands([]);
      } else {
        // let maxPrice = Math.max(...products.map((product) => product.price));
        // let minPrice = Math.min(...products.map((product) => product.price));
        // let brands = new Set();
        // for (let product of products) {
        //   brands.add(product.brand);
        // }
        // brands = [...brands];
        // let newBrands = [];
        // for (let brand of brands) {
        //   newBrands.push({ name: brand, isChecked: false });
        // }
        // setProducts(products);
        // setFilteredProducts(products);
        // setMinPrice(minPrice);
        // setMaxPrice(maxPrice);
        // setPrice(maxPrice);
        // setLoading(false);
        // setBrands(newBrands);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <>
        <div>Wait</div>
      </>
    );
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-md-none">
            <div className="filter-dropdown mt-2 fixed-bottom">
              <div
                className="btn btn-block bg-white border-radius-0 border filter-dropdown-btn py-2"
                onClick={() => {
                  setFiltershow(!isFiltershow);
                }}
              >
                {/* <FaSlidersH className="pt-1" />{" "} */}
                <span
                  style={{
                    fontSize: "18px",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  Filter
                </span>
                <span>{isFiltershow ? <FaTimes className="pt-2" /> : ""}</span>
              </div>
              <div
                className={`border filter-dropdown-menu bg-white ${
                  isFiltershow ? "show" : "hide"
                }`}
              >
                <div className="filter-dropdown-item">
                  <Filter
                    price={price}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    // handleChange={this.handleChange}
                    brands={brands}
                    // brandChange={this.brandChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="filter-row mt-5 pt-5">
            <div className="fir-child">
              <p>FILTERS</p>
            </div>
            <div className="sec-child">
              <div>
                <span>Bundles</span>
                <MdExpandMore />
              </div>
              <div>
                <span>Country Of origin</span>
                <MdExpandMore />
              </div>
              <div>
                <span>Size</span>
                <MdExpandMore />
              </div>
            </div>
            <div className="name-fil">
              {/* <p>FILTER</p> */}
              {/* <Sort /> */}
              <div className="dropdown dropdown-hover ">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Sort By : </span>
                  <span>Recommended</span>
                </button>
                <div
                  className="dropdown-menu  dropdown-hover-menu "
                  aria-labelledby="triggerId"
                >
                  <button className="dropdown-item">What's New</button>
                  <button className="dropdown-item">Popularity</button>
                  <button className="dropdown-item">Better Discount</button>
                  <button className="dropdown-item">Price: High to Low</button>
                  <button className="dropdown-item">Price: Low to High</button>
                  <button className="dropdown-item">Customer Rating</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-2 border border-right-0 d-none d-md-block">
            <Filter
              price={price}
              minPrice={minPrice}
              maxPrice={maxPrice}
              // handleChange={this.handleChange}
              brands={brands}
              // brandChange={this.brandChange}
            />
          </div>
          <div className="col-md-9 col-lg-10 border py-2">
            {/* <div className="text-center  pt-4 category-header text-uppercase">
                    {category}
                  </div> */}
            <div className="row margin-on-md">
              {bestProducts.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    onProductClick={handleMove}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCategoryWiseProductPage;
