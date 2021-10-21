import React, { Component } from 'react'
import CardTitle from './components/Movies/CardTitle';
import CardImage from './components/Movies/CardImage';
import Player from './components/Movies/Player';
import './App.css';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      movies: []
    };
  }

  componentDidMount() {
    fetch("https://www.htmlhints.com/api/data.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            movies: result.moviesData
          });
          console.log(this.state.movies);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
play = (classs) => {
  // var node = document.createElement("div");              
  // var textnode = document.createTextNode("Water");     
  // node.appendChild(textnode);                             
  // classs.target.offsetParent.closest(".cards").appendChild(node);   
  const title = <div>Hello</div>;
  ReactDOM.render(
    title,
    classs.target.offsetParent.closest(".cards")
  );
}
  render() {
    var groupSize = 5;
    var rows = Object.keys(this.state.movies).map((item, key) => {
      return (
        <div className="card-wrapper" key={key}>
        <div className="card-inner" onClick={(e) => this.play(e)}>
          <CardImage image={this.state.movies[item].EventImageUrl} />
          <div className="date">{this.state.movies[item].ShowDate.slice(0,-6)}</div>
          <div className="backdrop">
            <div className="ratings">
                <div className="rating-percentage">
                  <i className="fas fa-thumbs-up"></i>
                  <span>99%</span>
                </div>
                  <div className="total-votes">
                    18900 votes
                  </div>
              </div>
              </div>
            <div className="play-icon">
          <i className="far fa-play-circle fa-4x"></i>
          </div>
          </div>

        <CardTitle title={this.state.movies[item].EventTitle} />
        <Player title={this.state.movies[item].EventTitle} />
      </div>
      )
    }).reduce(function(r, element, index) {
      // create element groups with size 3, result looks like:
      // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
      index % groupSize === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
  }, []).map(function(rowContent, key) {
      // surround every group with 'row'
      return <div className={`cards cards${key}`}>{rowContent}</div>;
  });
    return <section className="movies-container">
    {rows}
      </section>;
  }
}

export default App;