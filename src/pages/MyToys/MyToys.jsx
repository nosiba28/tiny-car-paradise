import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import MyToysRows from "./MyToysRow";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
    useEffect(()=>{
        document.title = 'TinyCarsParadise | My Toys';
    }, [])
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [myToys, setMyToys] = useState([]);
    const url = `https://tiny-car-paradise-server.vercel.app/mycars?sellerEmail=${user?.email}`;
    const urlASort = `https://tiny-car-paradise-server.vercel.app/myAscendingCars?sellerEmail=${user?.email}`;
    const urlDSort = `https://tiny-car-paradise-server.vercel.app/myDescendingCars?sellerEmail=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setMyToys(data);
                }
                else{
                    navigate('/');
                }
            })
    }, [url, navigate]);

    const handleDelete = id =>{
        const proceed = confirm('Are You sure want to delete');
        if(proceed){
            fetch(`https://tiny-car-paradise-server.vercel.app/mycars/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount> 0){
                    Swal.fire({
                        title: 'Successfully Deleted!',
                        icon: 'error',
                       
                      })

                    const remaining =myToys.filter(toy => toy._id !==id);
                    setMyToys(remaining);
                }
            })
        }
    }
    const handleSortByAscending= () =>{
        fetch(urlASort, {
            method: 'GET',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setMyToys(data);
                }
                else{
                    navigate('/');
                }
            })
    }
    const handleSortByDescending= () =>{
        fetch(urlDSort, {
            method: 'GET',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setMyToys(data);
                }
                else{
                    navigate('/');
                }
            })
    }
    return (
        <div className="text-center bg-purple-800">
        <div className="dropdown m-20">
        <button className="btn btn-outline btn-accent">Sort By Price</button>
                <div className="dropdown-content bg-pink-600 text-white rounded-lg p-1">
                    <button onClick={handleSortByAscending} className="border-b-2 px-1 my-1">Sort By Ascending</button>
                    <button onClick={handleSortByDescending} className="border-b-2 px-1 my-2">Sort By Descending</button>

                </div>
            </div>
        <div className="overflow-x-auto w-full pb-11 p-5">
            <table className="table w-full text-center p-6">
                {/*table head */}
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    myToys.map(toy => <MyToysRow
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                    ></MyToysRow>)
                   } 
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default MyToys;