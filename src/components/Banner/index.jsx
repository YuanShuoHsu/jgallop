import BannerSearch from "./BannerSearch";

import { register } from "swiper/element/bundle";

import styles from "./index.module.scss";

register();

export default function Banner({ data }) {
  return (
    <div className={styles.banner}>
      <swiper-container
        auto-height="true"
        autoplay-delay="3000"
        autoplay-disable-on-interaction="false"
        free-mode-enabled="true"
        free-mode-sticky="true"
        grab-cursor="tr e"
        keyboard-enabled="true"
        loop="true"
        pagination="true"
        pagination-clickable="true"
        speed="500"
      >
        {data.photoList.map((photo, index) => (
          <swiper-slide key={index}>
            <img
              className={styles.banner__image}
              src={`https://jgdev.jgallop.com/funjatrip/images/${photo.blockPhotoPath}/${photo.blockPhotoName}`}
              alt={photo.blockPhotoName}
            />
          </swiper-slide>
        ))}
      </swiper-container>
      <BannerSearch />
    </div>
  );
}
