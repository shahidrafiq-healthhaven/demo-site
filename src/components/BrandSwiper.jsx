import React ,{useState, useEffect} from 'react'
// import Brand1 from '../assets/images/royal.png';
// import Brand2 from '../assets/images/gfc.png';
// import Brand3 from '../assets/images/sufi.png';
// import Brand4 from '../assets/images/topair.png';
import { BallTriangle } from 'react-loader-spinner';
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import http from "../http";
import {constructImageUrl} from "../services/MainService";

function BrandSwiper() {
  const imagePath = 'brandImages'
  const fileUrl = constructImageUrl(imagePath);
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    fetchBrands();
 
  }, [])

  const fetchBrands = ()=>{
    http.get('/getBrands')
    .then((response) => {
      console.log("getBrands response :",response.data.data);
      setBrands(response.data.data);
      setLoading(false);
      setError(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setError(true);
      setLoading(false);
    });
  }

  return !loading ?(
    <div> 
      {error && <div className="mb-3">Something went wrong</div>}
    
        <Swiper className="mySwiper inner_swipper_main"  spaceBetween={20}  slidesPerView={5}  
            breakpoints={{
            320: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            480: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            640: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            768: {
            slidesPerView: 4,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            },
        }} >

          {brands.map((item)=>(
            <SwiperSlide className="inner_swiper" key={item.brand_id}>
            <img src={`${fileUrl}/${item.image}`} alt="brand_image" />    
            </SwiperSlide>
          ))}
       
        </Swiper>
   </div>
  ) : 
  (
    <div  className='d-flex justify-content-center align-items-center' style={{height : "100vh"}}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#283D98"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}

        />
    </div>
  )


}

export default BrandSwiper