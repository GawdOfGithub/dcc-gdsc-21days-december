import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useApiStore from "../api/ApiStore";
import dcc from "../assets/dccc.jpg"
const Navbar = () => {
  const {setToken,logout} = useApiStore();
   const navigate = useNavigate()
const userNickName = localStorage.getItem('userName')
   const handleLogout = ()=>
   {
    logout()
   }

   const user = useApiStore((state)=>(state.token))
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
    <img src={dcc} height={100} width={100}/>
  </div>
  <div className="navbar-center ">
    <ul className="menu menu-horizontal px-1 flex items-center justify-center">
     
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Taskset">Tasks</Link></li>
      <li><Link to="/LeaderBoard">LeaderBoard</Link></li>
      <li><Link to="/FAQs">FAQs</Link></li>

    </ul>
  </div>
{
  !user ?
  (<>
  <div className="navbar-end">

  <button className="avatar placeholder " onClick={()=>navigate("/signIn")}>
  
  <div className="bg-neutral text-neutral-content rounded-full w-16 custom-bg-color">
    <span className="text-1xl">Login</span>
  </div>
</button> 


  </div>
  </>):
  <>
  <div className=" navbar navbar-end  dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="avatar placeholder ">
      <div className="bg-neutral text-neutral-content rounded-full w-16">
    <span className="text-xl ">{`${userNickName?userNickName:"Login"}`}</span>
  </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-30">
        
      <Link to="/user"><button onClick={handleLogout}>User</button></Link>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  </>
}
 
  
</div>
        </>
    );
};
export default Navbar;
