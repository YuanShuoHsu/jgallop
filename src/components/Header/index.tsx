import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <HeaderLogo />
      <HeaderNav />
    </div>
  );
}
