import { Link } from "react-router-dom";

import logo from "../../../images/Header/HeaderLogo/logo.svg";

import styles from "./index.module.scss";

export default function HeaderLogo() {
  return (
    <Link to="/">
      <div className={styles.headerLogo}>
        <img className={styles.headerLogo__image} src={logo} alt="logo" />
      </div>
    </Link>
  );
}
