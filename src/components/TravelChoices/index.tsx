import independent from "../../images/TravelChoices/independent.svg";
import group from "../../images/TravelChoices/group.svg";

import styles from "./index.module.scss";

export default function TravelChoices() {
  return (
    <div className={styles.travelChoices}>
      <div className={styles.travelChoices__grid}>
        <button className={styles.travelChoices__button}>
          <div className={styles.travelChoices__imgBox}>
            <img
              className={styles.travelChoices__image}
              src={independent}
              alt="independent"
            />
          </div>
          <div className={styles.travelChoices__buttonText}>
            <span className={styles.travelChoices__buttonMainText}>
              我想自由行
            </span>
            <span className={styles.travelChoices__buttonSubText}>
              只想專心參加國際學校課程
            </span>
          </div>
          <div className={styles.travelChoices__empty} />
        </button>
        <span className={styles.travelChoices__narration}>
          只想專心參加國際學校課程
        </span>
      </div>
      <div className={styles.travelChoices__grid}>
        <button className={styles.travelChoices__button}>
          <div className={styles.travelChoices__imgBox}>
            <img
              className={styles.travelChoices__image}
              src={group}
              alt="group"
            />
          </div>
          <div className={styles.travelChoices__buttonText}>
            <span className={styles.travelChoices__buttonMainText}>
              我想跟團
            </span>
            <span className={styles.travelChoices__buttonSubText}>
              上課+跟團旅遊，世界那麼大都想去看看
            </span>
          </div>
          <div className={styles.travelChoices__empty} />
        </button>
        <span className={styles.travelChoices__narration}>
          上課+跟團旅遊，世界那麼大都想去看看
        </span>
      </div>
    </div>
  );
}
