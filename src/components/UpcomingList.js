import FilmElement from "./FilmElement";

export default function UpcomingList(props) {
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
    <div className="section" id="upcoming-list">
      <h1 className="section-title">Upcoming Films</h1>
      <div className="filmList">{filmElement}</div>
    </div>
  );
}
