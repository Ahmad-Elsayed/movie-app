import React from "react";

import styles from "./styles.module.css";

function MovieItem({
  title,
  description,
  image,
  rating,
}: {
  title: string;
  description: string;
  image?: string;
  rating?: number;
}) {
  return (
    <div className={styles.containerStyle}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${image}`}
        alt=""
        className={styles.imageStyle}
      />
      <div className={styles.movieInfo}>
        <h3 className={styles.titleStyle}>{title}</h3>
        <span
          className={`${styles.rating} ${
            rating && rating > 6 && styles.ratingHigh
          }`}
        >
          {rating}
        </span>
      </div>
      <div className={styles.desc}>
        <h3>OverView</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default MovieItem;
