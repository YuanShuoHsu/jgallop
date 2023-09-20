import { useEffect, useRef } from "react";
import { s2t } from "chinese-s2t";
import { Link } from "react-router-dom";

import { register } from "swiper/element/bundle";

import styles from "./index.module.scss";

register();

export default function CountriesNavigation({ data }) {
  console.log(data.areaList);
  const swiperEl = useRef(null);

  useEffect(() => {
    const swiperParams = {
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
    <div
      className={styles.countriesNavigation}
      style={{
        backgroundImage: `url(https://jgdev.jgallop.com/funjatrip/images/${data.blockPhotoPath}/${data.blockPhotoName})`,
      }}
    >
      <swiper-container ref={swiperEl} init="false">
        {/* <swiper-slide>
          <Link to="" className={styles.countriesNavigation__link}>
            <div className={styles.countriesNavigation__box}>
              <span className={styles.countriesNavigation__text}>美國</span>
              <img
                className={styles.countriesNavigation__image}
                src={america}
                alt="america"
              />
            </div>
          </Link>
        </swiper-slide> */}
        {data.areaList.map((area) => (
          <swiper-slide key={area.areaId}>
            <Link to="" className={styles.countriesNavigation__link}>
              <div className={styles.countriesNavigation__box}>
                <span className={styles.countriesNavigation__text}>
                  {s2t(area.areaName)}
                </span>
                <img
                  className={styles.countriesNavigation__image}
                  src={area.image}
                  alt={area.name}
                />
              </div>
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
