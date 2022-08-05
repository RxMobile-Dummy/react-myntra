// import React, { useEffect, useState } from "react";
// import Loading from "../components/Loading";
// import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
import Product from "../../components/categoryproduct/Product";
import { FaSlidersH, FaTimes } from "react-icons/fa";
import React, { Component } from "react";
import Filter from "../../components/categoryproduct/Filter";
import "./MainCategory.css";
import { bestProducts } from "../../constants/Products";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default class MainCategoryWiseProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mainCategory: props.match.params.mainCategory,
      // category: props.match.params.category,
      loading: false,
      products: [],
      minPrice: 0,
      maxPrice: 0,
      price: 0,
      filteredProducts: [],
      sortOrder: "",
      brands: [],
      isFiltershow: true,
    };
  }

  getData = async () => {
    try {
      this.setState({ loading: true });
      // let products = await ProductService.getAllProducts();
      let products = bestProducts; //above line uncomment for real data
      products = products.data;
      products = products.filter(
        (product) =>
          product.category.categoryName.toLowerCase() ===
            this.state.category.toLowerCase() &&
          product.mainCategory.mainCategoryName.toLowerCase() ===
            this.state.mainCategory.toLowerCase()
      );

      if (products.length === 0) {
        this.setState({
          filteredProducts: [],
          minPrice: 0,
          maxPrice: 0,
          price: 0,
          loading: false,
          brands: [],
        });
      } else {
        let maxPrice = Math.max(...products.map((product) => product.price));

        let minPrice = Math.min(...products.map((product) => product.price));

        let brands = new Set();
        for (let product of products) {
          brands.add(product.brand.brandName);
        }
        brands = [...brands];
        let newBrands = [];
        for (let brand of brands) {
          newBrands.push({ name: brand, isChecked: false });
        }

        this.setState({
          products: products,
          filteredProducts: products,
          maxPrice: maxPrice,
          minPrice: minPrice,
          price: maxPrice,
          loading: false,
          brands: newBrands,
        });
      }
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  };

  componentWillReceiveProps(newProps) {
    this.setState(
      {
        mainCategory: newProps.match.params.mainCategory,
        category: newProps.match.params.category,
      },
      this.getData
    );
  }

  componentDidMount() {
    this.getData();
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.sortProducts);
  };

  brandChange = (i) => {
    this.setState((state, props) => {
      state.brands[i].isChecked = !state.brands[i].isChecked;
      return {
        brands: state.brands,
      };
    }, this.sortProducts);
  };

  sortProducts = () => {
    let tempProducts = this.state.products;

    const { price, sortOrder, brands } = this.state;

    tempProducts = tempProducts.filter(
      (product) => parseInt(product.price) <= parseInt(price)
    );

    if (sortOrder === "ascending") {
      tempProducts.sort(this.sortProductsAscending("price"));
    } else if (sortOrder === "descending") {
      tempProducts.sort(this.sortProductsDescending("price"));
    }

    let newTempProducts = [];
    let oneChecked = false;

    for (let brand of brands) {
      if (brand.isChecked === true) {
        oneChecked = true;
        let tempProductsArray = tempProducts.filter(
          (product) =>
            product.brand.brandName.toLowerCase() === brand.name.toLowerCase()
        );
        newTempProducts = newTempProducts.concat(tempProductsArray);
      }
    }

    if (oneChecked) {
      tempProducts = newTempProducts;
    }

    this.setState({ filteredProducts: tempProducts });
  };

  sortProductsAscending = (field) => {
    return function (a, b) {
      if (a[field] > b[field]) {
        return 1;
      } else if (a[field] < b[field]) {
        return -1;
      }
      return 0;
    };
  };

  sortProductsDescending = (field) => {
    return function (a, b) {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      }
      return 0;
    };
  };

  render() {
    const {
      loading,
      filteredProducts,
      price,
      minPrice,
      maxPrice,
      brands,
      isFiltershow,
    } = this.state;
    if (loading) {
      return (
        <>
          <div>Wait</div>
        </>
      );
    }

    // if (filteredProducts.length < 1) {
    //   return (
    //     <>
    //       <div className="container-fluid">
    //         <div className="row">
    //           <div className="d-md-none">
    //             <div className="filter-dropdown mt-2 fixed-bottom">
    //               <div
    //                 className="btn btn-block bg-white border-radius-0 border filter-dropdown-btn py-2"
    //                 onClick={() => {
    //                   this.setState({ isFiltershow: !isFiltershow });
    //                 }}
    //               >
    //                 <FaSlidersH className="pt-1" />{" "}
    //                 <span
    //                   style={{
    //                     fontSize: "18px",
    //                     letterSpacing: "1px",
    //                     fontWeight: "500",
    //                   }}
    //                 >
    //                   Filter
    //                 </span>
    //                 <span>
    //                   {isFiltershow ? <FaTimes className="pt-2" /> : ""}
    //                 </span>
    //               </div>
    //               <div
    //                 className={`border filter-dropdown-menu bg-white ${
    //                   isFiltershow ? "show" : "show"
    //                 }`}
    //               >
    //                 <div className="filter-dropdown-item">
    //                   <Filter
    //                     price={price}
    //                     minPrice={minPrice}
    //                     maxPrice={maxPrice}
    //                     handleChange={this.handleChange}
    //                     brands={brands}
    //                     brandChange={this.brandChange}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-md-3 col-lg-2 border border-right-0 my-5 py-5 d-none d-md-block">
    //             <Filter
    //               price={price}
    //               minPrice={minPrice}
    //               maxPrice={maxPrice}
    //               handleChange={this.handleChange}
    //               brands={brands}
    //               brandChange={this.brandChange}
    //             />
    //           </div>
    //           <div className="col-md-9 col-lg-10 border py-4 margin-on-md">
    //             {/* <div className="text-center pt-4 category-header text-uppercase">
    //             {category}
    //             </div> */}
    //             <div className="error-container my-5 text-center p-5 mx-auto">
    //               <h1 className="text-capitalize text-center ">
    //                 no products available
    //               </h1>
    //               <Link
    //                 to="/"
    //                 className="btn btn-pink btn-lg text-capitalize mt-3"
    //               >
    //                 back to home
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   );
    // }

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="d-md-none">
              <div className="filter-dropdown mt-2 fixed-bottom">
                <div
                  className="btn btn-block bg-white border-radius-0 border filter-dropdown-btn py-2"
                  onClick={() => {
                    this.setState({ isFiltershow: !isFiltershow });
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
                  <span>
                    {isFiltershow ? <FaTimes className="pt-2" /> : ""}
                  </span>
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
                      handleChange={this.handleChange}
                      brands={brands}
                      brandChange={this.brandChange}
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
                <div class="dropdown dropdown-hover ">
                  <button
                    class="btn btn-secondary dropdown-toggle"
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
                    class="dropdown-menu  dropdown-hover-menu "
                    aria-labelledby="triggerId"
                  >
                    <button class="dropdown-item" href="#">
                      What's New
                    </button>
                    <button class="dropdown-item" href="#">
                      Popularity
                    </button>
                    <button class="dropdown-item" href="#">
                      Better Discount
                    </button>
                    <button class="dropdown-item" href="#">
                      Price: High to Low
                    </button>
                    <button class="dropdown-item" href="#">
                      Price: Low to High
                    </button>
                    <button class="dropdown-item" href="#">
                      Customer Rating
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 border border-right-0 d-none d-md-block">
              <Filter
                price={price}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleChange={this.handleChange}
                brands={brands}
                brandChange={this.brandChange}
              />
            </div>
            <div className="col-md-9 col-lg-10 border py-2">
              {/* <div className="text-center  pt-4 category-header text-uppercase">
                    {category}
                  </div> */}
              <div className="row margin-on-md">
                {bestProducts.map((product) => {
                  return <Product key={product._id} product={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
