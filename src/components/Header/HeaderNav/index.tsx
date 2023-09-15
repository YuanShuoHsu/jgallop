import styles from "./index.module.scss";
import menuItems, {
  MenuItem,
} from "../../../datasets/Header/HeaderNav/headerNavItems";
import HeaderNavDropdown from "./HeaderNavDropdown";

export default function HeaderNav() {
  return (
    <ul className={styles.headerNav}>
      {menuItems.map((menuItem: MenuItem, index: number) => (
        <li className={styles.headerNav__item} key={index}>
          {menuItem.label[0]}
          {menuItem.label.length > 1 && (
            <HeaderNavDropdown labels={menuItem.label.slice(1)} />
          )}
        </li>
      ))}
    </ul>
  );
}
