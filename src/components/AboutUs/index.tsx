import { Link } from "react-router-dom";

import { fixUTF8Encoding } from "../../utils/fixUTF8Encoding";

import styles from "./index.module.scss";

interface AboutUsProps {
  data: {
    blockPhotoPath: string;
    blockPhotoName: string;
    mainTitle: string;
    subTitle: string;
    buttonTitle: string;
  };
}

export default function AboutUs({ data }: AboutUsProps) {
  return (
    <div
      className={styles.aboutUs}
      style={{
        backgroundImage: `url(https://jgdev.jgallop.com/funjatrip/images/${data.blockPhotoPath}/${data.blockPhotoName})`,
      }}
    >
      <h2 className={styles.aboutUs__title}>
        {fixUTF8Encoding(data.mainTitle)}
      </h2>
      <p className={styles.aboutUs__description}>
        {fixUTF8Encoding(data.subTitle)}
      </p>
      <Link to="" className={styles.aboutUs__link}>
        <button className={styles.aboutUs__button}>
          {fixUTF8Encoding(data.buttonTitle)}
        </button>
      </Link>
    </div>
  );
}
