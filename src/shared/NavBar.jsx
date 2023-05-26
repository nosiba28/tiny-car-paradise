import { Link } from "react-router-dom";
import logo from '../assets/toyCarLogo.jpg'
import { useContext, useRef, useState } from "react";
import { Overlay } from "react-overlays";
import { AuthContext } from "../pages/providers/AuthProvider";
import { Fragment } from "react";
import { Tooltip, Button } from "@material-tailwind/react";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const navitems = <>
        <li><Link className="text-lg text-purple-700 font-semibold" to="/">Home</Link></li>
        <li><Link className="text-lg text-purple-700 font-semibold" to="/allToys">All Toys</Link></li>

        <li><Link className="text-lg text-purple-700 font-semibold" to="/blog">Blogs</Link></li>
        {/* If user is logged in then we can show these private routes and user's profile pictures */}
        {user ? <><li><Link className="text-lg text-purple-700 font-semibold" to="/myToys">My Toys</Link></li>
            <li><Link className="text-lg text-purple-700 font-semibold" to="/addToy">Add a Toy</Link></li>
            <span className="md:flex justify-center items-center"> <Tooltip content={user.displayName} placement="top" className="text-white bg-pink-700 p-2 font-bold text-md">
                <Button><img src={user?.photoURL} alt="" className="w-11 rounded-full" /></Button>
            </Tooltip>

                <button className="btn btn-outline btn-secondary text-lg mx-4 px-3" onClick={handleLogout}>Logout</button>
            </span>
        </> : <Link to="/login"><button className="btn btn-outline btn-secondary text-lg">Login</button></Link>}



    </>
    return (
        <div className="navbar bg-base-300 h-38 p-10 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-58">
                        {navitems}
                    </ul>
                </div>
                <Link className="mx-auto">
                    <div className="flex items-center">
                        <img className='w-1/6 rounded-full' src={logo} alt="" />
                        <h2 className="text-3xl font-bold text-purple-900">TinyCarParadise</h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;