
import { Link } from "react-router-dom";
const Navbar = () => {
   
    return (
        <>
        
            <div className="navbar  z-50 absolute top-0 min-w-[100vh] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        <li><a>Admin Dashboard</a></li>
      </ul>
    </div>
    <img src="dcc.svg" height={50} width={50}/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center justify-center">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Taskset">Tasks</Link></li>
      <li><Link to="/LeaderBoard">LeaderBoard</Link></li>
      <li><Link to="/FAQs">FAQs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div>
        </>
    );
};
export default Navbar;