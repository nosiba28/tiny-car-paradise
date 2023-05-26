import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import LatestToys from "../LatestToys/LatestToys";
import AboutUs from "../AboutUs/AboutUs";


const Home = () => {
    useEffect(()=>{
        document.title = 'TinyCarsParadise | Home';
    }, [])
    
    return (
        <div className="w-full overflow-x-hidden">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <LatestToys></LatestToys>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;