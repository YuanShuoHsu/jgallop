import logo from "../../../images/Header/HeaderLogo/logo.svg";
import styles from "./index.module.scss";

export default function HeaderLogo() {
  return (
    <div className={styles.headerLogo}>
      <img className={styles.headerLogo__image} src={logo} alt="logo" />
    </div>
  );
}
