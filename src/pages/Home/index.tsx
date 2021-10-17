import useAxios from "axios-hooks";
import React from "react";
import { MovieListDto } from "../../@types/movieList_types";
import Header from "../../components/Header";
import MovieItem from "../../components/MovieItem";
import styles from "./styles.module.css";

function Home() {
  const [{ data, error }] = useAxios<MovieListDto>({
    url: "discover/movie",
  });
  console.log(data, error);
  return (
    <>
      <Header />
      <div className={styles.listContainerStyle}>
        {data?.results.map((movie) => (
          <MovieItem
            description={movie.overview}
            title={movie.title}
            image={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
