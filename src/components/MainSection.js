import dummyData from "../dummyData";
import FilmElement from "./FilmElement";

export default function MainSection(props) {
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
    <div className="section" id="main-section">
      <h1 className="section-title">Watched</h1>
      <div className="block">
        {dummyData.length > 0 && (
          <div className="main-list-filmList">{filmElement}</div>
        )}
      </div>
    </div>
  );
}
