import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MovieGenre from "../../components/Genre/Genre";
import MovieCard from "../../components/Movie/Movie";
import {
  ButtonsContainer,
  CardContainer,
  DescriptionContainer,
  GenreContainer,
  MainContainer,
} from "./styled";
import { getMovie, getMovieGenres } from "../../services/getMovie";
import { goToMovieDetails } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    getMovie(setMovies);
  }, []);

  useEffect(() => {
    getMovieGenres(setGenre);
  }, []);

  const onClickCard = (id) => {
    goToMovieDetails(history, id);
  };

  const genreList =
    genre &&
    genre.map((genre) => {
      return <MovieGenre key={genre.id} id={genre.id} name={genre.name} />;
    });

  const movieList =
    movies &&
    movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
          onClickCard={() => onClickCard(movie.id)}
        />
      );
    });

  return (
    <MainContainer>
      <Header />
      <GenreContainer>
        <DescriptionContainer>
          <h3>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h3>
          <p>GÊNERO:</p>
        </DescriptionContainer>
        <ButtonsContainer>{genreList}</ButtonsContainer>
      </GenreContainer>
      <CardContainer>{movieList}</CardContainer>
    </MainContainer>
  );
}

export default HomePage;
