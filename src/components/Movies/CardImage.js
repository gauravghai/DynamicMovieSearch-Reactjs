import React, {useState} from "react";
import NoThumbanil from '../../assets/NoThubnail.png'

function CardImage(props) {

    const [image, setImage] = useState(props.value)
    // If image status is 404 then showing placeholder image 
  return (
    <img className="Card-Image" src={image} alt={props.title} onError={(e)=>{e.target.onError = null; setImage(NoThumbanil)}}/> 
  );
}

export default CardImage;
