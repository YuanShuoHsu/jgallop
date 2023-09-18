import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h2 className={styles.aboutUs__title}>關於放假趣</h2>
      <p className={styles.aboutUs__description}>
        每一天，我們都在協助您發掘全球最棒的遊學行程與體驗！放假趣將文化交流、語言學習與各項領域訓練統整結合，藉由多元的課程與項目，讓夢想和社交在國際化視野中開拓與實現。
      </p>

      <Link to="" className={styles.aboutUs__link}>
        <button className={styles.aboutUs__button}>現在就開始吧</button>
      </Link>
    </div>
  );
}
