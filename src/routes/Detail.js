import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.scss";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h2 className={style.home}>
        <Link to={`/`}>Main</Link>
      </h2>
      {loading ? (
        <h1 className={style.loading}>로딩중...</h1>
      ) : (
        <div className={style.main}>
          <img src={movieInfo.large_cover_image} />
          <div>
            {movieInfo.title} ({movieInfo.year}) / {movieInfo.genres} / ⭐️
            {movieInfo.rating}
            <p>{movieInfo.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
