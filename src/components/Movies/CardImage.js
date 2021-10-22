import React from "react";
import NoThumbanil from '../../assets/NoThubnail.png'

function CardImage(props) {
    // If image status is 404 then showing placeholder image 
  return (
    <img className="Card-Image" src={props.value} onError={(e)=>{e.target.onError = null; e.target.src = NoThumbanil}}/> 
  );
}

export default CardImage;
