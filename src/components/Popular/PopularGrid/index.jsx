import { useEffect, useRef } from "react";

import marker from "../../../images/Popular/PopularGrid/marker.svg"
import assistant from "../../../images/Popular/PopularGrid/assistant.png"
import like from "../../../images/Popular/PopularGrid/like.svg"

import { fixUTF8Encoding } from "../../../utils/fixUTF8Encoding";

import { register } from "swiper/element/bundle";

import styles from "./index.module.scss";

register();

export default function PopularGrid({ data }) {
  // console.log(data[0]);
  // console.log(data[0].minPrice);
  // console.log(fixUTF8Encoding(data[0].travelName));
  // console.log(fixUTF8Encoding(data[0].travelDesc));
  // console.log(fixUTF8Encoding(data[0].areaList[0].areaName));
  // console.log(fixUTF8Encoding(data[0].areaList[0].cityList[0].cityName));

  const swiperEl = useRef(null);

  useEffect(() => {
    const swiperParams = {
      breakpoints: {
        1200: {
          grid: { rows: 2 },
          slidesPerView: 3,
          slidesPerGroup: 3,
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
      navigation: true,
      pagination: {
        clickable: true,
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      speed: 500,
    };

    Object.assign(swiperEl.current, swiperParams);

    swiperEl.current.initialize();
  }, []);

  return (
    <div className={styles.popularGrid}>
      <swiper-container ref={swiperEl} init="false">
        {data.map((item) => (
          <swiper-slide key={item.travelId}>
            <div className={styles.popularGrid__header}>
              <img
                className={styles.popularGrid__headerImage}
                src={`https://jgdev.jgallop.com/funjatrip/images/${item.photoList[0].photoPath}/${item.photoList[0].photoName}`}
                alt=""
              />
            </div>
            <div className={styles.popularGrid__main}>
              <div className={styles.popularGrid__location}>
                <div className={styles.popularGrid__locationIcon}>
                  <img
                    className={styles.popularGrid__locationIconImage}
                    src={marker}
                    alt="marker"
                  />
                </div>
                <span className={styles.popularGrid__locationText}>
                  {`${fixUTF8Encoding(
                    item.areaList[0].areaName
                  )} ${fixUTF8Encoding(item.areaList[0].cityList[0].cityName)}`}
                </span>
              </div>
              <div className={styles.popularGrid__theme}>
                <span className={styles.popularGrid__title}>
                  {`${fixUTF8Encoding(item.travelName)}`}
                </span>
                <span
                  className={styles.popularGrid__minDays}
                >{`（${item.minDays}）`}</span>
              </div>
              <div className={styles.popularGrid__section}>
                <div className={styles.popularGrid__attendance}>
                  <div className={styles.popularGrid__attendanceIcon}>
                    <img
                      className={styles.popularGrid__attendanceIconImage}
                      src={assistant}
                      alt="assistant"
                    />
                  </div>
                  <span className={styles.popularGrid__attendanceText}>
                    {`${item.joinCount}人已去過`}
                  </span>
                </div>
                <div className={styles.popularGrid__interest}>
                  <div className={styles.popularGrid__interestIcon}>
                    <img
                      className={styles.popularGrid__interestIconImage}
                      src={like}
                      alt="like"
                    />
                  </div>
                  <span className={styles.popularGrid__interestText}>
                    {`${item.favoriteCount}人有興趣`}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.popularGrid__footer}>
              <span className={styles.popularGrid__footerText}>{item.currencyCode}</span>
              <span className={styles.popularGrid__footerPrice}>{item.minPrice}</span>
              <span className={styles.popularGrid__footerText}>起</span>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
