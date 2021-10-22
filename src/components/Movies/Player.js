import React from "react";
import CardRatingPerc from './CardRatingPerc';
import CardVotes from './CardVotes';
function Player(props) {

    // Reg Exp to get id of youtube video from the url as url provided in API has watch attribute which can't be embed in iframe
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = props.TrailerURL.match(regExp);
    var URL = `https://www.youtube.com/embed/${(match&&match[7].length==11)? match[7] : false}`;

  return (
      <div className="player-wrapper" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)), url(${props.EventImageUrl})`,
      }}>
          <div className="player-id">
          <iframe height="669" src={URL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className="player-details">
           <div className="player-details-inner">
               <h1 className="player-title">{props.EventTitle}</h1>
               <p className="player-language">{props.EventLanguage}</p>
               <div className="player-genre-wrapper">
               {props.EventGenre.split("|").map((item, key) => (
                    <span key={key} className="genre">{item}</span>
                ))}
               </div>
               <div className="player-other-details">
                    <div className="player-votes">
                        <i className="fas fa-thumbs-up fa-2x"></i>
                        <div className="player-votes-inner">
                            <div><CardRatingPerc value={props.ratings.wtsPerc} /></div>
                            <div><CardVotes value={props.ratings.totalWTSCount} /></div>
                        </div>
                    </div>
                    <div className="player-date">
                        <i className="fas fa-calendar-alt fa-2x"></i>
                        <div className="player-date-inner"> 
                            <div>{props.ShowDate.slice(0,-6)}</div>
                            <div>{props.ShowDate.slice(7)}</div>
                        </div>
                    </div>
               </div>
            </div>
          </div>
      </div>
  );

}

export default Player;
