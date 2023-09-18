import { register } from "swiper/element/bundle";

import banner from "../../../images/Banner/banner.jpg";

import styles from "./index.module.scss";

register();

export default function SchoolsSwiper() {
  return (
    <swiper-container
      auto-height="true"
      autoplay-delay="3000"
      autoplay-disable-on-interaction="false"
      className={styles.schoolsSwiper}
      free-mode-enabled="true"
      free-mode-sticky="true"
      grab-cursor="true"
      keyboard-enabled="true"
      loop="true"
      pagination="true"
      pagination-clickable="true"
      speed="500"
    >
      <swiper-slide>
        <img
          className={styles.schoolsSwiper__image}
          src={banner}
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          className={styles.schoolsSwiper__image}
          src={banner}
          alt="banner"
        />
      </swiper-slide>
    </swiper-container>
  );
}