import React from "react";

function CardImage(props) {
  return (
<img src={props.image} onError={(e)=>{e.target.onError = null; e.target.src = 'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/medium/junglee-et00065129-13-11-2017-03-34-14.jpg'}}/> 
  );
}

export default CardImage;
