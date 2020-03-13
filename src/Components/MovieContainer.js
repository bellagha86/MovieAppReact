import React, { Component } from "react";
import "./MovieContainer.css";
import MovieList from "./MovieList";
import Rating from "./MovieRating";
import {MovieArray} from './data';


class MovieContainer extends Component {
  state = {
    MovieArray,
    movieSearch: "",
    rating:"",
    newMovie: {},

  };
  handleChange = e => {
    this.setState({
      movieSearch: e.target.value
    });
  };
  addMovie = (newMovie)=>this.setState({MovieArray : [newMovie , ...this.state.MovieArray]})
  addRating = rating => this.setState({ rating: rating + 1 });
  render() {
    console.log('movieSearch :' ,this.state.movieSearch)
    const filteredMovie=this.state.MovieArray.filter(el=>el.name.toUpperCase().includes(this.state.movieSearch.toUpperCase())).filter(el=>el.rating>=this.state.rating)
console.log('filteredMovie : ', filteredMovie)
    return (
      <div>
        <h1 className="Mouflix">MOUFLIX</h1>
        <h2 className="Subtitle">
          The place to not find your favourite movies
        </h2>
        <div className="headbody">
          <input
            className="Searchbar"
            placeholder="Looking for a movie? Pretty sure tou won't find it here. But go ahead and try !"
            value={this.state.movieSearch}
            onChange={this.handleChange}
          ></input>
          <button className="Searchbutton">Search</button>
         <Rating addRating={this.addRating}/>
        </div>
        <MovieList SearchMovie={this.state.movieSearch} MovieArray={filteredMovie} addMovie={this.addMovie} addRating={this.addRating}/>
      </div>
    );
  }
}
export default MovieContainer;
