import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    useEffect(()=>{
        document.title = 'TinyCarsParadise | Update Toy';
    }, [])
    const toy = useLoaderData();
    const {_id, name, sellerName, sellerEmail, subcategory, price, rating, quantity, photo, details} = toy;
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value
        const updatedToy = {price, quantity, details};
        console.log(updatedToy);

        fetch(`https://tiny-car-paradise-server.vercel.app/mycars/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Updated Successfully!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    }
   
    return (
        <div className="bg-purple-800 p-24">
            <h2 className="text-3xl font-extrabold text-center mb-4 text-white">Update {name} {subcategory} Toy</h2>
            <form onSubmit={handleAddToy}>
                
                {/* third row */}
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} />
                        </label>
                    </div>
                  
                </div>
                {/* forth row */}
                <div className="mb-8">
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered md:w-full" defaultValue={quantity} />
                        </label>
                    </div>
                </div>
                {/* fifth row */}
                <div className="mb-8">
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white">Detail Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" defaultValue={details} />
                        </label>
                    </div> 
                </div>
    
                <input className="btn btn-block btn-secondary" type="submit" value="Update the Toy" />
            </form>
        </div>
    );
};

export default UpdateToy;