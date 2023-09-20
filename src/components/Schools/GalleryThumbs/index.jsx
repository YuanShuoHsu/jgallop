import { useState } from "react";

import {
  Autoplay,
  Keyboard,
  FreeMode,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/thumbs";

import styles from "./index.module.scss";

export default function GalleryThumbs() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.GalleryThumbs}>
      <Swiper
        className={styles.mySwiper2}
        modules={[Autoplay, Keyboard, FreeMode, Pagination, Thumbs]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        grabCursor={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        <SwiperSlide>
          <span>1</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>2</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>3</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>4</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>5</span>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        className={styles.mySwiper}
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        speed={500}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        grabCursor={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide>
          <span>1</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>2</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>3</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>4</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>5</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
