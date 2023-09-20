import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Fragment } from "react";

interface TravelChoicesButtonProps {
  to: string;
  imageSrc: string;
  alt: string;
  mainText: string;
  subText: string;
}

export default function TravelChoicesButton({
  to,
  imageSrc,
  alt,
  mainText,
  subText,
}: TravelChoicesButtonProps) {
  return (
    <Fragment>
      <Link to={to} className={styles.travelChoices__link}>
        <button className={styles.travelChoicesButton}>
          <div className={styles.travelChoicesButton__imgBox}>
            <img
              className={styles.travelChoicesButton__image}
              src={imageSrc}
              alt={alt}
            />
          </div>
          <div className={styles.travelChoicesButton__text}>
            <span className={styles.travelChoicesButton__mainText}>
              {mainText}
            </span>
            <span className={styles.travelChoicesButton__subText}>
              {subText}
            </span>
          </div>
          <div className={styles.travelChoicesButton__empty} />
        </button>
      </Link>
      <span className={styles.travelChoices__narration}>{subText}</span>
    </Fragment>
  );
}
