import React from "react";
import Rating from './Rating'


 function Moviebase({ moviesItems }) {
  return (
    <div className="moviesoffered">
      {moviesItems && moviesItems.map((el, i) => (
        <div className="CardMovie" key={i}>
          <img className="Poster" src={el.source} />
          <div className="Moviedescription">
            <h5>{el.name}</h5>
            <h6>With {el.stars}</h6>
            <p>Directed by: {el.direction}</p>
            <Rating rating={el.rating}/>
          </div>
        </div>
      ))}
      
    </div>
  );
}
export default Moviebase
