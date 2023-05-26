import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toys from './Toys';
const ShopByCategory = () => {
    const navigate = useNavigate();
    const [allToys, setAllToys] = useState([]);
    const [busToy, setBusToy] = useState([]);
    const [truckToy, setTruckToy] = useState([]);
    const [jeepToy, setJeepToy] = useState([]);
    const url = 'https://tiny-car-paradise-server.vercel.app/cars';
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setAllToys(data);
                }
                else{
                    navigate('/');
                }
            })
    }, [url, navigate]);

    useEffect(()=>{
        const bus = allToys.filter(btoy => btoy.subcategory === "Bus car");
        setBusToy(bus);
        console.log(bus);
    },[allToys])
   
    const handleTruckCar = () =>{
        const truck = allToys.filter(ttoy => ttoy.subcategory === "Truck car");
        setTruckToy(truck);
        console.log(truck);
    }
    const handleJeepCar = () =>{
        const Jeep = allToys.filter(jtoy => jtoy.subcategory === "Jeep car");
        setJeepToy(Jeep);
        console.log(Jeep);
    }
    return (
        <div className='py-10 bg-purple-800 w-full overflow-hidden' data-aos="fade-up-right" >
           <h2 className="text-white text-4xl font-bold text-center pt-16 pb-4">Shop By Category</h2>
            <Tabs className="text-center text-white m-4">
                <TabList>
                    <Tab>
                        Bus Car
                    </Tab>
                    <Tab onClick={handleTruckCar}>
                        Truck Car
                    </Tab>
                    <Tab onClick={handleJeepCar}>
                        Jeep Car
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                    {
                           busToy.map(toy => <Toys
                           key={toy._id}
                           toy={toy}
                           >

                           </Toys>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                           truckToy.map(toy => <Toys
                           key={toy._id}
                           toy={toy}
                           >

                           </Toys>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                           jeepToy.map(toy => <Toys
                           key={toy._id}
                           toy={toy}
                           >

                           </Toys>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;