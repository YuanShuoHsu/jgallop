import { useState, useEffect } from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderNav from "./HeaderNav";

import styles from "./index.module.scss";

export default function Header() {
  const [isHeaderActive, setHeaderActive] = useState(false);

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
