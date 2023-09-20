import { useEffect, useRef } from "react";

import { register } from "swiper/element/bundle";

import america from "../../../images/Countries/CountriesSwiper/america.jpg";

import styles from "./index.module.scss";

register();

export default function CountriesSwiper() {
  const swiperEl = useRef(null);

  useEffect(() => {
    const swiperParams = {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
      freeMode: {
        enabled: true,
        sticky: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      loop: true,
      navigation: true,
      pagination: {
        clickable: true,
      },
      speed: 500,
    };

    Object.assign(swiperEl.current, swiperParams);

    swiperEl.current.initialize();
  }, [swiperEl]);

  return (
    <swiper-container ref={swiperEl} init="false">
      <swiper-slide>
        <div className={styles.countriesSwiper__box}>
          <span className={styles.countriesSwiper__text}>美國</span>
          <img
            className={styles.countriesSwiper__image}
            src={america}
            alt="america"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className={styles.countriesSwiper__box}>
          <span className={styles.countriesSwiper__text}>英國</span>
          <img
            className={styles.countriesSwiper__image}
            src={america}
            alt="america"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className={styles.countriesSwiper__box}>
          <span className={styles.countriesSwiper__text}>瑞士</span>
          <img
            className={styles.countriesSwiper__image}
            src={america}
            alt="america"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className={styles.countriesSwiper__box}>
          <span className={styles.countriesSwiper__text}>澳洲</span>
          <img
            className={styles.countriesSwiper__image}
            src={america}
            alt="america"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className={styles.countriesSwiper__box}>
          <span className={styles.countriesSwiper__text}>德國</span>
          <img
            className={styles.countriesSwiper__image}
            src={america}
            alt="america"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className={styles.countriesSwiper__box}>
          <span className={styles.countriesSwiper__text}>新加坡</span>
          <img
            className={styles.countriesSwiper__image}
            src={america}
            alt="america"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className={styles.countriesSwiper__box}>
          <span className={styles.countriesSwiper__text}>香港</span>
          <img
            className={styles.countriesSwiper__image}
            src={america}
            alt="america"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  );
}
