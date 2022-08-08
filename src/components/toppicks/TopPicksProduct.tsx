import React from "react";
import { Link } from "react-router-dom";
// import { hostName } from "../../utils/Global";
import "./TopPicks.css";

interface Props {
  product: any;
}

export default function TopPicks(props: Props) {
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
    <div className="card shadow-sm bg-white rounded">
      <Link to={`/product/${id}`} className="card-link card-cus">
        <img src={imgurls} className="card-img-top" alt="..." />
        <div className="top-card card-body">
          <p className="h5 fw-normal">{productName}</p>
          <p className="h5 card-text">{offer}</p>
        </div>
      </Link>
    </div>
  );
}
