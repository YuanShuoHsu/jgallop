import logo from "../../../images/Footer/logo.svg";
import styles from "./index.module.scss"

export default function FooterLogo() {
  return (
    <div className={styles.footerLogo}>
      <img className={styles.footerLogo__image} src={logo} alt="logo" />
    </div>
  );
}
