import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const LatestToys = () => {
    
    return (
        <div className="bg-purple-800 w-full overflow-hidden" data-aos="fade-left">
            <h2 className="text-white text-4xl font-bold text-center pt-16 pb-4">Latest cars</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card md:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1512308439392-3c1bec71099e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-1/3"></img></figure>
                        <div className="card-body">
                            <h2 className="card-title">Presented By Toyko</h2>
                            <p>Click the button to buy your new car!!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className="card md:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/MBw9Zpj/photo-1672467575273-2918d93d00ce-ixlib-rb-4-0.jpg" className="w-1/3"></img></figure>
                        <div className="card-body">
                            <h2 className="card-title">Presented By Toyko</h2>
                            <p>Click the button to buy your new car!!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card md:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/T0kd7z4/photo-1669822398466-c3efc7a77a7e-ixlib-rb-4-0.jpg" className="w-1/3"></img></figure>
                        <div className="card-body">
                            <h2 className="card-title">Presented By Toyko</h2>
                            <p>Click the button to buy your new car!!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            
                <SwiperSlide>
                <div className="card md:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/Y7rDL7B/photo-1632435285445-94bca1f15246-ixlib-rb-4-0.jpg" className="w-1/3"></img></figure>
                        <div className="card-body">
                            <h2 className="card-title">Presented By Toyko</h2>
                            <p>Click the button to buy your new car!!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card md:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/hswk9yJ/photo-1558563763-9157dc01afbc-ixlib-rb-4-0.jpg" className="w-1/3"></img></figure>
                        <div className="card-body">
                            <h2 className="card-title">Presented By Toyko</h2>
                            <p>Click the button to buy your new car!!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default LatestToys;