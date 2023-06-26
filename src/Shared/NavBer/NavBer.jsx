const NavBer = () => {
  const list = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About Me</a>
      </li>
      <li>
        <a>My Project</a>
      </li>
      </>
  );
  return (
    <div className="navbar md:justify-center bg-black text-white">
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
        <img className="w-[50px]" src="https://i.ibb.co/TB1PdVs/Mesa-de-trabajo-1-2x.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {list}
        </ul>
      </div>
    </div>
  );
};

export default NavBer;
