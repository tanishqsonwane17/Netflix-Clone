const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#141414d7] bg-opacity-80 fixed w-full z-10">
      <h1 className="text-3xl font-bold text-red-600">NETFLIX</h1>
      <ul className="hidden md:flex space-x-6 text-sm">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>
      <div className="flex items-center space-x-4">
        <span className="material-icons text-white">search</span>
        <span className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">U</span>
      </div>
    </nav>
  );
};

export default Navbar;
