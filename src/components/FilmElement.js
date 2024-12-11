export default function FilmElement(props) {
  return (
    <div>
      <button className="film-element" onClick={props.handleClick}>
        <p className="film-element-title">{props.title}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster}`}
          alt={`${props.title} Poster`}
          className="film-Poster"
        />
        <p className="film-element-date">{`${props.date.split("-")[2]}/${
          props.date.split("-")[1]
        }/${props.date.split("-")[0]}`}</p>
      </button>
    </div>
  );
}
