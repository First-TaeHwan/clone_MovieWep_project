import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <div>
          <h2>
            <Link to={`/`}>Main</Link>
          </h2>
          <img src={movieInfo.large_cover_image} />
          <h2>
            {movieInfo.title} / {movieInfo.year} / {movieInfo.genres} / ⭐️
            {movieInfo.rating}
          </h2>
          <p>{movieInfo.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
