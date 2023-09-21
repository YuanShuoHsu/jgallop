import PopularGrid from "./PopularGrid";

import { fixUTF8Encoding } from "../../utils/fixUTF8Encoding";

import styles from "./index.module.scss";

interface TravelItem {}

interface PopularProps {
  data: {
    mainTitle: string;
    subTitle: string;
    travelList: TravelItem[];
  };
}

export default function Popular({ data }: PopularProps) {
  return (
    <div className={styles.popular}>
      <h2 className={styles.popular__title}>
        {fixUTF8Encoding(data.mainTitle)}
      </h2>
      <p className={styles.popular__description}>
        {fixUTF8Encoding(data.subTitle)}
      </p>
      <PopularGrid data={data.travelList} />
    </div>
  );
}
