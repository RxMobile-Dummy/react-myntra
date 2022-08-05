import React from "react";
import TopPicksProduct from "./TopPicksProduct";
import "./TopPicks.css";

export default function TopPicksList({ products }) {
  if (products.length < 1) {
    return (
      <div className="container-fluid">
        <div className="error-container my-5 text-center p-5 mx-auto">
          <h1 className="text-capitalize text-center ">
            no products available
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="card-row">
        {products.map((product, index) => {
          return <TopPicksProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
