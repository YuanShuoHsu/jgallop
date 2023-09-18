import CountriesSwiper from "./CountriesSwiper";

import styles from "./index.module.scss";

export default function Countries() {
  return (
    <div className={styles.countries}>
      <h2 className={styles.countries__title}>各國遊學趣</h2>
      <p className={styles.countries__description}>
        各國有很多知名學校，給你不同的體驗
      </p>
      <CountriesSwiper />
    </div>
  );
}
