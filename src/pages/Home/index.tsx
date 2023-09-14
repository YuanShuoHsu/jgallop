import Header from "../../components/Header";
import Banner from "../../components/Banner";
import TravelChoices from "../../components/TravelChoices";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Banner />
      <TravelChoices />
    </div>
  );
}
