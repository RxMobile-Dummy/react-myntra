import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Deals.css";

interface Props {
  allproduct: any;
}

export default function DealsProduct(props: Props) {
  // console.log(props.allproduct);
  const { _id: id, ProductImage, Productname, Brand, offer } = props.allproduct;
  return (
    // <div className="col-6 col-md-4 col-lg-2">
    //   <Link to={`/product/${id}`} className="card-link">
    //     <div className="card product-card" style={{ border: "none" }}>
    //       <div className="card-body">
    //         <div className="deals-img-container">
    //           <img
    //             className="img-fluid rounded"
    //             // src={`${hostName}/${imgurls[0]}`}
    //             src="https://source.unsplash.com/user/c_v_r/180x120"
    //             alt={Productname}
    //             width="100%"
    //           />
    //         </div>
    //       </div>
    //       <div className="text-center">
    //         <h5 className="font-weight-bold text-capitalize">
    //           {Brand.brandName}
    //         </h5>
    //         <span className="h5 font-weight-bold text-orange">
    //           {offer > 0 ? `${offer} % OFF` : null}
    //         </span>
    //         <div className="text-muted line-2 text-capitalize mb-2">
    //           {Productname}
    //         </div>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
    <div
      className="card shadow-sm bg-white rounded"
      style={{ marginRight: "0.5rem " }}
    >
      <Link to={`/product/${id}`} className="card-link">
        <img
          src="https://source.unsplash.com/user/c_v_r/180x120"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="fw-semibold">{Brand.brandname}</p>
          <p className="text-start">{Productname}.</p>
          <p className="card-text">12</p>
        </div>
      </Link>
    </div>
  );
}
