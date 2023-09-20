import { useEffect, useRef } from "react";

import { register } from "swiper/element/bundle";

import styles from "./index.module.scss";

import image from "../../../images/AboutUs/aboutUs.jpg";

register();

export default function PopularGrid({ data }) {
  const swiperEl = useRef(null);

  console.log(data);

  useEffect(() => {
    const swiperParams = {
      breakpoints: {
        1200: {
          slidesPerView: 3,
          grid: { rows: 2 },
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
      spaceBetween: 20,
      speed: 500,
    };

    Object.assign(swiperEl.current, swiperParams);

    swiperEl.current.initialize();
  }, []);

  return (
    <div className={styles.popularGrid}>
      <swiper-container ref={swiperEl} init="false">
        <swiper-slide>
          <div className={styles.popularGrid__header}>
            <img
              className={styles.popularGrid__headerImage}
              src={image}
              alt=""
            />
          </div>
          <div className={styles.popularGrid__main}>
            <div className={styles.popularGrid__location}>
              <div className={styles.popularGrid__locationIcon}>
                <img
                  className={styles.popularGrid__locationIconImage}
                  src=""
                  alt=""
                />
              </div>
              <span className={styles.popularGrid__locationText}>
                澳洲 昆士蘭州
              </span>
            </div>
            <span className={styles.popularGrid__title}>
              學在澳洲 趣在樂高（營在澳洲）(11306)
            </span>
            <div className={styles.popularGrid__section}>
              <div className={styles.popularGrid__attendance}>
                <div className={styles.popularGrid__attendanceIcon}>
                  <img
                    className={styles.popularGrid__attendanceIconImage}
                    src=""
                    alt=""
                  />
                </div>
                <span className={styles.popularGrid__attendanceText}>
                  0人已去過
                </span>
              </div>
              <div className={styles.popularGrid__interest}>
                <div className={styles.popularGrid__interestIcon}>
                  <img
                    className={styles.popularGrid__interestIconImage}
                    src=""
                    alt=""
                  />
                </div>
                <span className={styles.popularGrid__interestText}>
                  0人有興趣
                </span>
              </div>
            </div>
          </div>
          <div className={styles.popularGrid__footer}>
            <span className={styles.popularGrid__footerText}>USD</span>
            <span className={styles.popularGrid__footerPrice}>4049.6</span>
            <span className={styles.popularGrid__footerText}>起</span>
          </div>
        </swiper-slide>
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
