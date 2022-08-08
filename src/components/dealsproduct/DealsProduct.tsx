import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { hostName } from "../../utils/Global";
import "./Deals.css";

interface Props {
  product: any;
}

export default function DealsProduct(props: Props) {
  const { _id: id, imgurls, productName, brand, offer } = props.product;
  return (
    // <div className="col-6 col-md-4 col-lg-2">
    //   <Link to={`/product/${id}`} className="card-link">
    //     <div className="card product-card" style={{ border: "none" }}>
    //       <div className="card-body">
    //         <div className="deals-img-container">
    //           <img
    //             className="img-fluid rounded"
    //             // src={`${hostName}/${imgurls[0]}`}
    //             src={imgurls}
    //             alt={productName}
    //             width="100%"
    //           />
    //         </div>
    //       </div>
    //       <div className="text-center">
    //         <h5 className="font-weight-bold text-capitalize">
    //           {brand.brandName}
    //         </h5>
    //         <span className="h5 font-weight-bold text-orange">
    //           {offer > 0 ? `${offer} % OFF` : null}
    //         </span>
    //         <div className="text-muted line-2 text-capitalize mb-2">
    //           {productName}
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
        <img src={imgurls} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="fw-semibold">{brand}</p>
          <p className="text-start">{productName}.</p>
          <p className="card-text">{offer}</p>
        </div>
      </Link>
    </div>
  );
}
