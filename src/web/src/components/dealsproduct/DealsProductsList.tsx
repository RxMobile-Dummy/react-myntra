import React from "react";
import DealsProduct from "./DealsProduct";
import "./Deals.css";

interface Props {
  allproducts: any[];  
}
export default function DealsProductsList(props: Props) {
//  console.log("Product props::", props.allproducts)
  if (props.allproducts.length < 1) {
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
        {props.allproducts.map((allproduct: any, index: number) => {
          return <DealsProduct key={index} allproduct={allproduct} />;
        })}
      </div>
    </div>
  );
}
