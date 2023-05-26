import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className="hero p-3 min-h-screen bg-purple-800 text-white w-screen overflow-hidden">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="carousel w-1/2 h-96 rounded-xl" data-aos="fade-left">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://images.pexels.com/photos/163836/vw-bulli-meadow-peace-163836.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2" data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Play With Toys!</h1>
                        <p className="py-6">Welcome to Speedy Wheels Inc., your premier destination for high-quality toy cars and an unforgettable play experience! As a leading sponsor and manufacturer of toy cars, we are passionate about creating thrilling and realistic adventures for children of all ages. Our mission is to inspire imagination, encourage creativity, and ignite a love for cars in young minds!</p>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;