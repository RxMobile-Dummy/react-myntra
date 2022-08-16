import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";

interface Props {
  product: any;
  onProductClick: any;
}

export default function Product(props: Props) {
  const { _id: id, imgurls, productName, price, brand, offer } = props.product;
  return (
    <div className="col-6 col-md-4 col-lg-2 mt-3">
      {/* <Link to={`/product/${id}`} className="card-link"> */}
      <div
        className="card product-card"
        style={{ border: "none" }}
        onClick={props.onProductClick}
      >
        <div className="card-body">
          <div className="deals-img-container">
            <img
              className="img-fluid rounded"
              // src={`${hostName}/${imgurls[0]}`}
              // src={imgurls}
              src={images.ShirtDummy}
              alt={productName}
              width="100%"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="font-weight-bold text-capitalize">
            {brand.brandName}
          </div>
          <div className="text-muted line-2 text-capitalize">{productName}</div>
          <div className="mb-2">
            Rs. {offer > 0 ? parseInt(price) - (price * offer) / 100 : price}299
            <span className="text-muted mx-1 text-line-through">
              {offer > 0 ? `Rs. ${price}` : ""}
            </span>{" "}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}
