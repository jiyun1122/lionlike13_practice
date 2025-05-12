import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        setShow(data);
      } catch (e) {
        console.error("Error", e);
      }
    };

    fetchShow();
  }, [id]);

  if (!show) return <div className="text-center mt-10">🔄 로딩 중...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img
        src={show.image?.original}
        alt={show.name}
        className="w-full rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{show.name}</h1>
      <div className="mt-2 flex gap-2 flex-wrap">
        {show.genres.map((idx) => (
          <span
            key={idx}
            className="text-blue-700 px-2 py-1 rounded-full text-sm"
          >

          </span>
        ))}
      </div>
      <p className="mt-2 text-black">개봉일: {show.premiered}</p>
    </div>
  );
};

export default ShowDetail;
