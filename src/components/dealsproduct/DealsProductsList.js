import React from "react";
import DealsProduct from "./DealsProduct";
import "./Deals.css";

export default function DealsProductsList({ products }) {
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
          return <DealsProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
