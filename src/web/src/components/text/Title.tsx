import React from "react";

interface Props {
  title: string;
}
export default function Title(props: Props) {
  return (
    <div className="container-fluid">
      <div className="deals_header text-uppercase">{props.title}</div>
    </div>
  );
}
