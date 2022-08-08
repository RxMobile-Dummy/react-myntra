import React from "react";
import TopPicksProduct from "./TopPicksProduct";
import "./TopPicks.css";

interface Props {
  products: any;
}

export default function TopPicksList(props: Props) {
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
          return <TopPicksProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
