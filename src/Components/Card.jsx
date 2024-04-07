import { useState } from "react";

import "./Card.css";

function Card({ id,MovieName,MovieYear,image,deleteRemover,description }) {
  const [text, setText] = useState(false);
  const [info,setInfo]=useState(`${description.substr(0,20)}...showMore`)
  
  function infohandler(){
    if(info.endsWith("...showMore")){
      setInfo(`${description}...ReadLess`)
    }
    else{
      setInfo(`${description.substr(0,20)}...showMore`)
    }  
  }

  function clickHandler() {
    setText(!text);
  }
  return (
    <>
      <div className="total">
        <div className="inner">
          <img className="image" src={image} alt="" />

          <div className="name">
            <h2>{MovieName}</h2>
          </div>
          <div className="year">
            <h3>{MovieYear}</h3>
          </div>
          <div className="movie-about">
            <h3 onClick={infohandler}>
              {info}
            </h3>
          </div>
        </div>

        <div className="button">
          <button className="btn-fav" onClick={clickHandler}>
            {text ? "Added to Favorites" : "Add to Favorite "}
          </button>
          <button onClick={()=>{deleteRemover(id)}} className="btn-delete">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
