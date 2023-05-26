import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="p-24 bg-purple-800 m-6 rounded-xl">
             <div className="flex justify-center items-center">
             <img src="https://i.ibb.co/xGxbHQv/giphy.gif" alt="" className="w-1/3 rounded-full" />
             </div>
             <p className="text-white text-center text-6xl font-semibold">Oops!!</p>
             <p className="text-white text-center text-3xl font-semibold">Page not Found</p>
             <div className="text-center m-5">
             <Link to="/"><button className="btn btn-secondary">GO BACK TO HOME</button></Link>
             </div>
             

        </div>
    );
}