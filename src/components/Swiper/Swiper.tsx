import {Swiper, SwiperSlide} from 'swiper/react';
import {Grid, Navigation, Thumbs} from "swiper/modules";
import 'swiper/css';

import {ourDogs} from '../../db/cardsDogs.data.ts'
import {useState} from "react";


export const DogSwiper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Swiper
            
            thumbs={{swiper: thumbsSwiper}}
            navigation={true}
            modules={[Grid, Navigation, Thumbs]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {ourDogs.map((slide, index) => {
                return index <= 5
                    ? <SwiperSlide><img src={slide.image} alt=""/></SwiperSlide>
                    : null
            })}
        </Swiper>
    );
};