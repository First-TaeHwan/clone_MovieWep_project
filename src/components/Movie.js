import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.scss";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={style.item}>
      <img className={style.img} src={coverImg} alt={title} />
      <div className={style.text}>
        <h2 className={style.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <ul className={style.genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary.length > 230 ? `${summary.slice(0, 230)}...` : summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
