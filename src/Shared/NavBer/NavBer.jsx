import { Link } from 'react-router-dom';
import './NavBer.css'
const NavBer = () => {
  const list = (
    <>
      <li className='btn'>
        <Link>Home</Link>
      </li>
      <li className='btn'>
        <a>About Me</a>
      </li>
      <li className='btn'>
        <a>My Project</a>
      </li>
      </>
  );
  return (
    <div className="navbar md:justify-center ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
          {list}
          </ul>
        </div>
        <div className="flex items-center gap-1">
        <img className="w-[50px]" src="../../../public/img/logo.png" alt="" />
        <h1 className="font-bold text-xl logo-name">OHI</h1>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu-horizontal px-1 nav-list">
          {list}
        </ul>
      </div>
    </div>
  );
};

export default NavBer;
