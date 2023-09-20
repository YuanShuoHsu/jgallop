import CountriesNavigation from "./CountriesNavigation";

import styles from "./index.module.scss";

interface CountriesProps {
  data: {};
}

export default function Countries({ data }: CountriesProps) {
  return (
    <div className={styles.countries}>
      <h2 className={styles.countries__title}>各國遊學趣</h2>
      <p className={styles.countries__description}>
        各國有很多知名學校，給你不同的體驗
      </p>
      <CountriesNavigation data={data} />
    </div>
  );
}
