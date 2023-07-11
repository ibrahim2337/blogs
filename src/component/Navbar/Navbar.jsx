const Navbar = () => {
  return (
    <div>
      <div className="navbar lg:px-20 py-4 bg-slate-400">
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
              <li>
                <a>Cate</a>
              </li>
              <li>
                <a>Category</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="font-bold text-white text-2xl">BLOGS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-semibold text-white text-lg">Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="font-semibold text-white text-lg">Categories</summary>
                <ul className="p-2 bg-slate-400">
                  <li>
                    <a className="font-semibold text-white text-md">Category 1</a>
                  </li>
                  <li>
                    <a className="font-semibold text-white text-md">Category 2</a>
                  </li>
                  <li>
                    <a className="font-semibold text-white text-md">Category 3</a>
                  </li>
                  <li>
                    <a className="font-semibold text-white text-md">Category 4</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="font-semibold text-white text-xl">Tag</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
