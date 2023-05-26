import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";


const Gallery = () => {
    
    return (
        <div className="bg-purple-800 w-full overflow-hidden" data-aos="fade-up-right">
        <h2 className="text-white text-4xl font-bold text-center pt-16 pb-4">Tiny Car Gallery</h2>
        <Swiper
          slidesPerView={3}
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
          <SwiperSlide><img src="https://images.unsplash.com/photo-1512308439392-3c1bec71099e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/857CmGp/images-q-tbn-ANd9-Gc-Sx5-P7o-HI9-X-v-Nzff8nb-SGYWk-Ty-H6-ANn2-GGg-usqp-CAU.jpg" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/Q9wXtnD/photo-1447931958677-954446df5f70-ixlib-rb-4-0.jpg" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/MBw9Zpj/photo-1672467575273-2918d93d00ce-ixlib-rb-4-0.jpg" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/8d46xVW/photo-1606843361419-d40b3664fd44-ixlib-rb-4-0.jpg" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/T0kd7z4/photo-1669822398466-c3efc7a77a7e-ixlib-rb-4-0.jpg" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1632766099287-f6f6a965feec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-1/3"></img></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/r2SSdsK/photo-1594787318286-3d835c1d207f-ixlib-rb-4-0.jpg" className="w-1/3"></img></SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Gallery;