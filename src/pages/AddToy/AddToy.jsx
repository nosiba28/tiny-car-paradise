import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    useEffect(()=>{
        document.title = 'TinyCarsParadise | Add Toy';
    }, [])
    const {user} = useContext(AuthContext);
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value
        const details = form.details.value
        const newToy = {name, sellerName, sellerEmail, subcategory, price, rating, quantity, photo, details};
        console.log(newToy);

        fetch('https://tiny-car-paradise-server.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Added Successfully!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                }
                form.reset();
        })
    }
    return (
        <div className="bg-purple-800 p-24">
            <h2 className="text-3xl font-extrabold text-center mb-4 text-white">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* first row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Seller name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" placeholder="Seller name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* second row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Seller email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="sellerEmail" placeholder="Seller email" className="input input-bordered w-full" defaultValue={user?.email} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Sub-category" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* third row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Rating</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                  
                </div>
                {/* forth row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
               
                <div className="form-control md:w-1/2 md:ml-3">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div> 
                </div>
    
                <input className="btn btn-block btn-secondary" type="submit" value="Add a Toy" />
            </form>
        </div>
    );
};

export default AddToy;