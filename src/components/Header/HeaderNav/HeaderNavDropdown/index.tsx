import styles from "./index.module.scss";

interface HeaderNavDropdownProps {
  labels: string[];
  isActive: boolean;
}

export default function HeaderNavDropdown({
  labels,
  isActive,
}: HeaderNavDropdownProps) {
  return (
    <ul
      className={`${styles.headerNavDropdown} ${
        isActive ? styles["headerNavDropdown--active"] : ""
      }`}
    >
      {labels.map((label, labelIndex) => (
        <li className={styles.headerNavDropdown__item} key={labelIndex}>
          <span className={styles.headerNavDropdown__itemText}>{label}</span>
        </li>
      ))}
    </ul>
  );
}
