import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

export default function EmptyBanner(props: Props) {
  return (
    <div className="container-fluid py-5">
      <div className="error-container my-5 text-center p-5 mx-auto">
        <h1 className="text-capitalize text-center ">{props.title}</h1>
        <Link to="/" className="btn btn-pink btn-lg text-capitalize mt-3">
          back to home
        </Link>
      </div>
    </div>
  );
}
