const MovieRow = ({ title }) => {
  const dummyPosters = Array(10).fill("https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg");

  return (
    <div className="px-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex space-x-2 overflow-x-scroll scrollbar-hide">
        {dummyPosters.map((poster, index) => (
          <img
            key={index}
            src={poster}
            alt="Movie Poster"
            className="w-40 h-60 object-cover rounded hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
