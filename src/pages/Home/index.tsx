import { useState, useEffect } from "react";

import axios from "axios";

import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import TravelChoices from "../../components/TravelChoices";
import Countries from "../../components/Countries";
import Schools from "../../components/Schools";
import Popular from "../../components/Popular";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";

import styles from "./index.module.scss";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [bannerData, setBannerData] = useState(null);
  const [countriesData, setCountriesData] = useState(null);
  const [popularData, setPopularData] = useState(null);
  const [aboutUsData, setAboutUsData] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    axios
      .post("https://jgdev.jgallop.com/funjatrip/api/mainPage")
      .then((response) => {
        const base64Data = response.data;
        const decodedData = atob(base64Data);
        const parsedData = JSON.parse(decodedData);
        const bannerData = parsedData.rtData.blocks[0];
        setBannerData(bannerData);
        const countriesData = parsedData.rtData.blocks[1];
        setCountriesData(countriesData);

        const popularData = parsedData.rtData.blocks[3];
        setPopularData(popularData);
        const aboutUsData = parsedData.rtData.blocks[4];
        setAboutUsData(aboutUsData);

        setTimeout(() => {
          document.body.style.overflow = "auto";
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("請求錯誤：", error);

        setTimeout(() => {
          document.body.style.overflow = "auto";
          setIsLoading(false);
        }, 1000);
      });

    // axios
    //   .get("/base64Data.txt")
    //   .then((response) => {
    //     const textData = response.data;
    //     const decodedData = atob(textData);
    //     const parsedData = JSON.parse(decodedData);
    //     console.log(parsedData);
    //   })
    //   .catch((error) => {
    //     console.error("加載文件錯誤：", error);
    //   });
  }, []);

  return (
    <div className={styles.home}>
      {isLoading && <Loading />}
      <Header />
      {bannerData && <Banner data={bannerData} />}
      <TravelChoices />
      {countriesData && <Countries data={countriesData} />}
      <Schools />
      {popularData && <Popular data={popularData} />}
      {aboutUsData && <AboutUs data={aboutUsData} />}
      <Footer />
    </div>
  );
}
