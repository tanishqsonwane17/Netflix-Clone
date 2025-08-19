import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Banner />

      <div className="space-y-8 mt-4">
        <MovieRow title="Trending Now" />
        <MovieRow title="Top Rated" />
        <MovieRow title="Action Movies" />
        <MovieRow title="Comedy Movies" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
