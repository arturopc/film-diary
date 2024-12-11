import "./App.css";
import UpcomingList from "./components/UpcomingList";
import CurrentlyShowing from "./components/CurrentlyShowing";
import MainSection from "./components/MainSection";
import WishList from "./components/WishList";
import NavBar from "./components/NavBar";
import MovieOverlay from "./components/MovieOverlay";
import { useState } from "react";

import dummyData from "./dummyData";
import viewedData from "./data/viewedData";
import wishListData from "./data/wishListData";

function App() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  /**
   * 
   * Switch data architecture:
   * 
   * Instead of multiple separated lists have one single list,
   * add 2 lists properties. One that designates if the movie 
   * belongs to upcoming, now showing or none
   * 
   * Another property that designates if the movie is in watch or wishlist
   * 
   * Rules:
   *  - a movie can be in either now showing or upcoming but nnot both at the same time
   *  - a movie can be in wish list or watched but not both at the same time
   *  - a movie can be in showing or upcoming and wishlist at the same time
   *  - a movie can be in showing or upcoming and watched at the same time
   */
  const [viewedMovies, setViewedMovies] = useState(viewedData);
  const [wishListMovies, setWishListMovies] = useState(wishListData);
  const [upcomingMovies, setUpcomingMovies] = useState(dummyData);
  const [currentlyMovies, setCurrentlyMovies] = useState(dummyData);

  const [overlayMovie, setOverlayMovie] = useState({
    title: "Test title",
    overview: "Here would be the summary",
    poster_path: "/mt8FqaswAMvMP5xOxSTLQPKEAL3.jpg",
  });

  function handleClick(
    selectedTitle,
    selectedOverview,
    selectedPosterPath,
    selectedRating
  ) {
    setOverlayData(
      selectedTitle,
      selectedOverview,
      selectedPosterPath,
      selectedRating
    );
    setOverlayOpen((prev) => !prev);
  }

  const closeOverlay = () => setOverlayOpen(false);

  function setOverlayData(
    selectedTitle,
    selectedOverview,
    selectedPosterPath,
    selectedRating
  ) {
    setOverlayMovie((prev) => {
      return {
        title: selectedTitle,
        overview: selectedOverview,
        poster_path: selectedPosterPath,
        rating: selectedRating ? selectedRating : null,
      };
    });
  }

  return (
    <div className="App">
      {overlayOpen && (
        <MovieOverlay movieData={overlayMovie} handleClose={closeOverlay} />
      )}
      <NavBar />
      <h1 className="title" id="title">
        Film Diary
      </h1>
      <MainSection movieData={viewedMovies} handleClick={handleClick} />

      <WishList movieData={wishListMovies} handleClick={handleClick} />
      <CurrentlyShowing movieData={currentlyMovies} handleClick={handleClick} />
      <UpcomingList movieData={upcomingMovies} handleClick={handleClick} />
    </div>
  );
}

export default App;
