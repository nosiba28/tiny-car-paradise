import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const ToyDetails = () => {
    useEffect(()=>{
        document.title = 'TinyCarsParadise | Toy Details';
    }, [])
  
    const toy = useLoaderData();
    const { _id, name, sellerName, sellerEmail, subcategory, price, rating, quantity, photo, details } = toy;
    return (
        <div className="hero min-h-screen bg-purple-800 text-white">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Toy name: {name}</h1>
                    <p>Seller Name: {sellerName}</p>
                    <p>Seller Email:{sellerEmail}</p>
                    <p>Subcategory: {subcategory}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Detail description: {details}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;