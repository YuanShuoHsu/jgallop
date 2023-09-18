import { useState } from "react";

import { register } from "swiper/element/bundle";

import banner from "../../../images/Banner/banner.jpg";

import styles from "./index.module.scss";

register();

export default function SchoolsThumbsGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.schoolsThumbsGallery}>
      <swiper-container
        className={styles.mySwiper}
        loop="true"
        navigation="true"
        space-between="10"
        thumbs-swiper={thumbsSwiper}
      >
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
      </swiper-container>
      <swiper-container
        className={styles.mySwiper2}
        free-mode="true"
        loop="true"
        onSwiper={setThumbsSwiper}
        space-between="10"
        slides-per-view="2"
        watch-slides-progress="true"
      >
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
        <swiper-slide>
          <img src={banner} alt="banner" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
