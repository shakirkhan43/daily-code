// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// const Slider = () => {
//   return (
//     <div style={{ width: '100%', maxWidth: '1000px', margin: 'auto', padding: '20px 0' }}>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//       >
//         <SwiperSlide>
//           <img
//             src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
//             alt="Slide 1"
//             style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '12px' }}
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="https://thumbs.dreamstime.com/b/asheville-north-carolina-blue-ridge-parkway-spring-flowers-sceni-scenic-landscape-blooming-rhododendron-blossoms-fluffy-93419635.jpg"
//             alt="Slide 2"
//             style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '12px' }}
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="https://thumbs.dreamstime.com/b/landscape-blue-ridge-mountains-ridges-valleys-nc-25093186.jpg"
//             alt="Slide 3"
//             style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '12px' }}
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
  const slides = [
    'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
    'https://thumbs.dreamstime.com/b/asheville-north-carolina-blue-ridge-parkway-spring-flowers-sceni-scenic-landscape-blooming-rhododendron-blossoms-fluffy-93419635.jpg',
    'https://thumbs.dreamstime.com/b/landscape-blue-ridge-mountains-ridges-valleys-nc-25093186.jpg',
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: 'auto', padding: '20px 0' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
