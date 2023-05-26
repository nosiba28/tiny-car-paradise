import { Link } from "react-router-dom";

const MyToysRow = ({toy, handleDelete}) => {
    const {_id, name, sellerName, sellerEmail, subcategory, price, rating, quantity, photo } = toy;
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
                <Link to={`/updateToy/${_id}`}><button className="btn btn-secondary">Update</button></Link>
            </th>
            <th>
                <button className="btn btn-secondary" onClick={()=>handleDelete(_id)}>Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;