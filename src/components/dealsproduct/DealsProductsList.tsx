import React from "react";
import DealsProduct from "./DealsProduct";
import "./Deals.css";

interface Props {
  products: any;
}
export default function DealsProductsList(props: Props) {
  if (props.products.length < 1) {
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
        {props.products.map((product: any, index: number) => {
          return <DealsProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
