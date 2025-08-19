const Banner = () => {
  return (
    <header className="h-[70vh] bg-[url('https://www.yashrajfilms.com/images/default-source/movies/saiyaara/saiyaara_767x430.jpg?sfvrsn=1d5fdecc_13')] bg-no-repeat bg-center bg-cover w-full">
      <div className="bg-gradient-to-t from-black w-full h-full p-6 md:p-12 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Saiyaara</h1>
        <p className="max-w-xl mb-4 text-sm md:text-base text-white">
When destiny brings two strangers together, they discover that love isn't always about perfect momentsit's about the imperfect ones that stay with you forever.        </p>
        <div className="space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold">Play</button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded font-semibold">More Info</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
