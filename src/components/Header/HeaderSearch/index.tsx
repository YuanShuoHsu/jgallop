import React, { useState } from "react";

import search from "../../../images/Header/HeaderSearch/search.svg";

import styles from "./index.module.scss";

export default function HeaderSearch() {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchText);
  };

  return (
    <form className={styles.headerSearch} onSubmit={handleSubmit}>
      <input
        className={styles.headerSearch__input}
        type="text"
        placeholder="搜尋"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className={styles.headerSearch__button} type="submit">
        <img
          className={styles.headerSearch__searchIcon}
          src={search}
          alt="search"
        />
      </button>
    </form>
  );
}
