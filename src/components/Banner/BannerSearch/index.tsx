import React, { useState } from "react";
import search from "../../../images/Banner/BannerSearch/search.svg";

import styles from "./index.module.scss";

export default function BannerSearch() {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className={styles.bannerSearch}>
      <span className={styles.bannerSearch__title}>
        放假，給孩子一個有趣的假期
      </span>
      <div className={styles.bannerSearch__inputContainer}>
        <input
          className={styles.bannerSearch__input}
          type="text"
          placeholder="輸入國家、城市、學校或課程名稱..."
          value={searchText}
          onChange={handleInputChange}
        />
        <button className={styles.bannerSearch__button}>
          <img
            className={styles.bannerSearch__searchIcon}
            src={search}
            alt="search"
          />
        </button>
      </div>
    </div>
  );
}
