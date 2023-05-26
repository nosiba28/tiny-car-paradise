import React,{ useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    useEffect(()=>{
        document.title = 'TinyCarsParadise | All Toys';
    }, [])
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [allToys, setAllToys] = useState([]);
    const [limitedToys, setLimitedToys] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const url = 'https://tiny-car-paradise-server.vercel.app/cars';
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
               
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setAllToys(data);
                }
                else {
                    navigate('/');
                }
            })
    }, [url, navigate]);
    const totalToys=allToys.length;
    const itemsPerPage = 20;
    const totalPages = Math.ceil(totalToys/itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://tiny-car-paradise-server.vercel.app/limitedCars?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json();
            setLimitedToys(data);
        }
        fetchData()
    }, [currentPage, itemsPerPage])
   
   
   
    return (
       <>
        <div className="bg-purple-800 text-center">
            <div className="form-control">
                <div className="input-group flex justify-center items-center my-11">
                    <input type="text" name="toyName" id="toyName"
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    placeholder="Search by toy name..."
                    className="input input-bordered" />
                    <button className="btn btn-square btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div> 
            <div className="overflow-x-auto w-full pb-24 px-5">
                <table className="table w-full text-center p-6">
                    {/*table head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          searchQuery? 
                          limitedToys.filter(toy => toy.name.toLowerCase().includes(searchQuery)).map(toy => <AllToysRow
                            key={toy._id}
                            toy={toy}
                        ></AllToysRow>)
                          :  
                          limitedToys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
        <div className="pagination btn-group flex justify-center items-center m-10">
            {/* <p>Current page: {currentPage}</p> */}
           {
            pageNumbers.map(number => <button key={number}
            className={currentPage === number+1 ? 'btn bg-pink-600':'btn'}
            onClick={()=>setCurrentPage(number+1)}
            >{number+1}</button>)
           }
        </div>
       </>
        
    );
};

export default AllToys;