import { useState, useEffect, useRef } from "react";

import { register } from "swiper/element/bundle";

import styles from "./index.module.scss";

register();

export default function SchoolsThumbsGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperEl = useRef(null);
  const swiperEl2 = useRef(null);

  useEffect(() => {
    const swiperParams = {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        sticky: true,
      },
      grabCursor: true,
      loop: true,
      navigation: true,
      speed: 500,
      // thumbs: { swiper: thumbsSwiper },
      thumbs: {
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
      },
    };

    const swiperParams2 = {
      freeMode: {
        enabled: true,
        sticky: true,
      },
      grabCursor: true,
      loop: true,
      onSwiper: { setThumbsSwiper },
      slidesPerView: 4,
      speed: 500,
      watchSlidesProgress: true,
    };

    Object.assign(swiperEl.current, swiperParams);
    Object.assign(swiperEl2.current, swiperParams2);

    swiperEl.current.initialize();
    swiperEl2.current.initialize();
  }, [thumbsSwiper]);

  return (
    <div className={styles.schoolsThumbsGallery}>
      <swiper-container ref={swiperEl} init="false">
        <swiper-slide>
          <span>1</span>
        </swiper-slide>
        <swiper-slide>
          <span>2</span>
        </swiper-slide>
        <swiper-slide>
          <span>3</span>
        </swiper-slide>
        <swiper-slide>
          <span>4</span>
        </swiper-slide>
        <swiper-slide>
          <span>5</span>
        </swiper-slide>
      </swiper-container>
      <swiper-container ref={swiperEl2} init="false">
        <swiper-slide>
          <span>1</span>
        </swiper-slide>
        <swiper-slide>
          <span>2</span>
        </swiper-slide>
        <swiper-slide>
          <span>3</span>
        </swiper-slide>
        <swiper-slide>
          <span>4</span>
        </swiper-slide>
        <swiper-slide>
          <span>5</span>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

// export default function GalleryThumbs() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className={styles.GalleryThumbs}>
//       <Swiper
//         className={styles.mySwiper2}
//         modules={[Autoplay, Keyboard, FreeMode, Pagination, Thumbs]}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         spaceBetween={0}
//         slidesPerView={1}
//         speed={500}
//         freeMode={{
//           enabled: true,
//           sticky: true,
//         }}
//         grabCursor={true}
//         thumbs={{
//           swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//         }}
//       >
//         <SwiperSlide>
//           <span>1</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>2</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>3</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>4</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>5</span>
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         className={styles.mySwiper}
//         modules={[FreeMode, Thumbs]}
//         spaceBetween={10}
//         slidesPerView={4}
//         speed={500}
//         freeMode={{
//           enabled: true,
//           sticky: true,
//         }}
//         grabCursor={true}
//         watchSlidesProgress={true}
//       >
//         <SwiperSlide>
//           <span>1</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>2</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>3</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>4</span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span>5</span>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
