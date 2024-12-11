import { useState } from "react";
export default function MovieOverlay(props) {
  const [tooltipOpened, setTooltipOpened] = useState(false);
  const [rating, setRating] = useState(0);

  const updateRating = (newRating) => {
    console.log("********Updateeeeeeeeeeee")
    setRating(newRating);
  }

  const showTooltip = () => {
    document.getElementById("add-movie-tooltip").show();
    setTooltipOpened(true);
  };

  const hideTooltip = () => {
    document.getElementById("add-movie-tooltip").close();

    if(tooltipOpened) setTooltipOpened(false);
  };

  function handleSubmit(event) {
    event.preventDefault(); // To pervent refreshing, resetting and showing the data on the url
    updateRating(event.target.value);
    //submitToApi();
  }

  function handleChange(event) {
    console.log(event.target);
    updateRating(event.target.value);
  }


  return (
    <div className="cover-over">
      <div className="overlay-bg">
        <div className="overlay-header">
          <h1 className="overlay-title">{props.movieData.title}</h1>

          <button className="close-overlay-button" onClick={props.handleClose}>
            x
          </button>
        </div>
        <div className="film-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movieData.poster_path}`}
            alt={`${props.movieData.title} Poster`}
            className="film-poster-overlay"
          />
          <p className="film-synopsis">{props.movieData.overview}</p>
        </div>
        <div className="film-actions">
          <button className="add-remove-button" onClick={tooltipOpened ? hideTooltip : showTooltip}>
            +
          </button>
          <h2 className="film-rating">Rating:</h2>
          <form onSubmit={handleSubmit}>
            <input
            id="rating-input"
            name="rating"
            type="number"
            min="0"
            max="10"
            value={rating}
            step="0.5"
            onChange={handleChange}
            />
          </form>
          <dialog id="add-movie-tooltip" >
            <p>Test Dialog</p>
          </dialog>
        </div>
      </div>
    </div>
  );
}
