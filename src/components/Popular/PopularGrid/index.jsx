import { useEffect, useRef } from "react";

import { register } from "swiper/element/bundle";

import styles from "./index.module.scss";

register();

export default function PopularGrid() {
  const swiperEl = useRef(null);

  useEffect(() => {
    const swiperParams = {
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
      },
      freeMode: {
        enabled: true,
        sticky: true,
      },
      grabCursor: true,
      grid: {
        rows: 2,
      },
      // loop: true, // 與 grid-rows 不兼容
      pagination: {
        clickable: true,
      },
      slidesPerView: 2,
      speed: 500,
    };

    Object.assign(swiperEl.current, swiperParams);

    swiperEl.current.initialize();
  }, [swiperEl]);

  return (
    <div className={styles.popularGrid}>
      <swiper-container ref={swiperEl} init="false">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper-container>
    </div>
  );
}
