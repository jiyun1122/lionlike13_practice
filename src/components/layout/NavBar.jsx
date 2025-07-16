import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="fixed top-0 border-b-[1.5px] border-main left-0 right-0 h-20 text-black bg-white flex items-center justify-end px-10 z-50">
      <Link
        to="/"
        className="absolute left-1/2 -translate-x-1/2 font-semibold text-2xl text-main"
      >
        HONGIK LIKELION
      </Link>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-main text-white font-semibold rounded-sm px-5 py-2 hover:bg-[#3a35a0] transition"
        >
          Login
        </Link>
        <Link
          to="/mypage"
          className="bg-main text-white font-semibold rounded-sm px-5 py-2 hover:bg-[#3a35a0] transition"
        >
          My Page
        </Link>
      </div>
    </nav>
  );
};
