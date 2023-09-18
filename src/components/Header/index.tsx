import { useState, useEffect } from "react";
import axios from "axios";

import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderNav from "./HeaderNav";

import styles from "./index.module.scss";

export default function Header() {
  const [isHeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    axios
      .post("https://jgdev.jgallop.com/funjatrip/api/mainPage")
      .then((response) => {
        const base64Data = response.data;
        const decodedData = atob(base64Data);
        const parsedData = JSON.parse(decodedData);
        console.log(parsedData);
      })
      .catch((error) => {
        console.error("請求錯誤：", error);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHeaderActive(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.header} ${
        isHeaderActive ? styles["header--active"] : ""
      }`}
    >
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav />
    </div>
  );
}
