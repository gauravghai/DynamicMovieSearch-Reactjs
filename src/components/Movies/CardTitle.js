import React from "react";

function CardTitle(props) {
  return (
    <h1 className="card-title">
      {props.value}
    </h1>
  );
}

export default CardTitle;
