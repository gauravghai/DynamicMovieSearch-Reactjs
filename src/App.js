import React, { Component } from 'react'
import Header from './components/Header';
import Card from './components/Movies/Card';
import Player from './components/Movies/Player';
import Error from './components/Error';
import LoaderGif from './assets/Loader.gif'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      movies: [],
      player: false,
      playerOffsetParent: false,
      playerData: [],
      screenWidth: 1700
    };
  }

  componentDidMount() {
    fetch("https://peaceful-forest-62260.herokuapp.com/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            movies: result.moviesData
          });
          console.log(2);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(1);
        }
      )

      // To check the screen width of window to make card listing responsive
      window.addEventListener('resize', () => {
        this.setState({screenWidth: window.innerWidth})
      });
  }

  PlayerTrigger = (e, item) => {    
    // Trigger player to show data once user clicked any card
    this.setState({ player: true, playerOffsetParent: e.target.offsetParent.closest(".card-body").classList[1], playerData: item})
  }

  componentDidUpdate(){
    // scroll window to the position of Player-Wrapper parent element once user clicked any card
    this.state.playerOffsetParent && document.querySelector(`.${this.state.playerOffsetParent}`).scrollIntoView({ behavior: 'smooth', block: 'start'})
  }
  render() {
    // Adding defined set of card in a row on the basis of screen width 
    // and wrap row with class cards to show player just beneath the row when a movie card is clicked
    
    let rows = Object.keys(this.state.movies).map((item, key) => {
      return (
        <Card key={key} PlayerTrigger={this.PlayerTrigger} {...this.state.movies[item]} />
      )
    }).reduce((arr, element, index) => {
      
      //set cards in a row depending on screen width
      if(this.state.screenWidth > 1650) {
        var groupSize = 6;
      } else if(this.state.screenWidth > 1300 && this.state.screenWidth < 1650){
        var groupSize = 3;
      } else if(this.state.screenWidth > 800 && this.state.screenWidth < 1300){
        var groupSize = 2;
      } else {
        var groupSize = 1;
      }

      // create element groups
      index % groupSize === 0 && arr.push([]);
      arr[arr.length - 1].push(element);
      return arr;
    },[]).map((rowContent, key) => {
        return (
        <div className={`card-body cards${key}`} key={key}>

            {/* showing player on card click */}
            {this.state.player && `cards${key}` === this.state.playerOffsetParent && (
              <Player playerOffsetParent={this.state.playerOffsetParent}  {...this.state.playerData}  />
            )}

            {/* surround every group with 'cards./' */}
            <div className={`cards`}>{rowContent}</div>
        </div>
        );
    });

    if(this.state.isLoaded) {
      if(this.state.error) {
        return <Error />
      } else {
        return  (
          <section >
            <Header />
            <div className="movies-container">{rows}</div>
          </section>
        );
      }
    } else {
      return <div className="loader"><img src={LoaderGif} /></div>;
    }
  }
}

export default App;