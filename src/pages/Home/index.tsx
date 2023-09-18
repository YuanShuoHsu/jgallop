import Header from "../../components/Header";
import Banner from "../../components/Banner";
import TravelChoices from "../../components/TravelChoices";
import Schools from "../../components/Schools";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Banner />
      <TravelChoices />
      <Schools />
      <AboutUs />
      <Footer />
    </div>
  );
}
