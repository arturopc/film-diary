import dummyData from "../dummyData";
import FilmElement from "./FilmElement";

export default function WishList(props) {
  const filmElement = props.movieData.map((film, index) => {
    return (
      <FilmElement
        key={index}
        title={film.title}
        poster={film.poster_path}
        date={film.release_date}
        handleClick={() => {
          props.handleClick(
            film.title,
            film.overview,
            film.poster_path,
            film.rating
          );
        }}
      />
    );
  });

  return (
    <div className="section" id="wish-list">
      <h1 className="section-title">WishList</h1>
      {dummyData.length > 0 && <div className="filmList">{filmElement}</div>}
    </div>
  );
}
