import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const Toys = ({toy}) => {
    const {user} = useContext(AuthContext);
    const {_id, name, sellerName, sellerEmail, subcategory, price, rating, quantity, photo } = toy;
    const notify = () => toast("You have to log in first to view details!");
    return (
        <div className="card w-96 bg-base-100 text-black shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                   <Link to={`/toyDetails/${_id}`}> <button className="btn btn-secondary" onClick={user? "" : notify}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Toys;