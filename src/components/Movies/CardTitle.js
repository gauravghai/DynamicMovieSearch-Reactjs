import React from "react";

function CardTitle(props) {
  return (
    <h2 className="card-title">
      {props.value}
    </h2>
  );
}

export default CardTitle;
