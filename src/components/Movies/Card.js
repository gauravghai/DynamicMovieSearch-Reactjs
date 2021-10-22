import React from "react";
import CardTitle from './CardTitle';
import CardImage from './CardImage';
import CardRatingPerc from './CardRatingPerc';
import CardVotes from './CardVotes';
function Card(props) {
  return (
    <div className="card-wrapper">
        <div className="card-inner" onClick={(e) => props.PlayerTrigger(e,props)}>
            <CardImage value={props.EventImageUrl} title={props.EventTitle} />
            <div className="date">
                {props.ShowDate.slice(0,-6)}
            </div>
            <div className="backdrop">
                <div className="ratings">
                    <div className="rating-percentage">
                        <i className="fas fa-thumbs-up"></i>
                        <CardRatingPerc value={props.ratings.wtsPerc} />
                    </div>
                    <div className="total-votes">
                    <CardVotes value={props.ratings.totalWTSCount} />
                    </div>
                </div>
            </div>
            <div className="play-icon">
                <i className="far fa-play-circle fa-4x"></i>
            </div>
            <CardTitle value={props.EventTitle} />
        </div>
    </div>
  );
}

export default Card;
