import TravelChoicesButton from "./TravelChoicesButton";

import independent from "../../images/TravelChoices/independent.svg";
import group from "../../images/TravelChoices/group.svg";

import styles from "./index.module.scss";

export default function TravelChoices() {
  return (
    <div className={styles.travelChoices}>
      <div className={styles.travelChoices__grid}>
        <TravelChoicesButton
          to="/"
          imageSrc={independent}
          alt="independent"
          mainText="我想自由行"
          subText="只想專心參加國際學校課程"
        />
      </div>
      <div className={styles.travelChoices__grid}>
        <TravelChoicesButton
          to="/"
          imageSrc={group}
          alt="group"
          mainText="我想跟團"
          subText="上課＋跟團旅遊，世界那麼大都想去看看"
        />
      </div>
    </div>
  );
}
