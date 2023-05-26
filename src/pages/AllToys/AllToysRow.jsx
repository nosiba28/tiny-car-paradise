import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllToysRow = ({ toy }) => {
    const {user} = useContext(AuthContext);
    const {_id, name, sellerName, sellerEmail, subcategory, price, rating, quantity, photo } = toy;

    const notify = () => toast("You have to log in first to view details!");
    
    return (
        <tr>
            <td>
                {
                    sellerName ? sellerName : ''
                }

            </td>
            <td>
                {name}
            </td>
            <td>
                {subcategory}
            </td>
            <td>
                ${price}
            </td>
            <td>
                {quantity}
            </td>
            <th>
                <Link to={`/toyDetails/${_id}`}><button onClick={user? "":notify} className="btn btn-secondary" >View Details</button></Link>
                
            </th>
        <ToastContainer />
           
        </tr>
    );
};

export default AllToysRow;