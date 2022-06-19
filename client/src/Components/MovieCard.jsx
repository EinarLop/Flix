import styles from "../Styles/MovieCard.module.scss";

const MovieCard = (props) => {
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>{props.title}</p>
      <p className={styles.Year}>
        <b className={styles.Bold}>Year:</b> {props.year}
      </p>
      <p className={styles.Rating}>
        <b className={styles.Bold}> Rating: </b>{" "}
        {props.rating.toString().substring(0, 4)}
      </p>
      <p className={styles.Place}>
        <b className={styles.Bold}>Place: </b> {props.place}
      </p>
      <p className={styles.Director}>
        <b className={styles.Bold}> Director:</b>{" "}
        {props.cast.split(" (dir.), ")[0]}
      </p>
      <p className={styles.Cast}>
        <b className={styles.Bold}>Star Cast:</b>{" "}
        {props.cast.split(" (dir.), ")[1]}
      </p>
    </div>
  );
};

export default MovieCard;
