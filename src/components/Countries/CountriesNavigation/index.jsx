import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import { fixUTF8Encoding } from "../../../utils/fixUTF8Encoding";

import { register } from "swiper/element/bundle";

import styles from "./index.module.scss";

register();

export default function CountriesNavigation({ data }) {
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
  }, []);

  return (
    <div
      className={styles.countriesNavigation}
      style={{
        backgroundImage: `url(https://jgdev.jgallop.com/funjatrip/images/${data.blockPhotoPath}/${data.blockPhotoName})`,
      }}
    >
      <swiper-container ref={swiperEl} init="false">
        {data.areaList.map((area) => (
          <swiper-slide key={area.areaId}>
            <Link to="" className={styles.countriesNavigation__link}>
              <div className={styles.countriesNavigation__box}>
                <span>{area.travelCount}課程</span>
                <span className={styles.countriesNavigation__text}>
                  {fixUTF8Encoding(area.areaName)}
                </span>
                <img
                  className={styles.countriesNavigation__image}
                  src={`https://jgdev.jgallop.com/funjatrip/images/${area.photoList[0].photoPath}/${area.photoList[0].photoName}`}
                  alt={fixUTF8Encoding(area.areaName)}
                />
              </div>
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
