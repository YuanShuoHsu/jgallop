import styles from "./index.module.scss";

interface HeaderNavDropdownProps {
  labels: string[];
}

export default function HeaderNavDropdown({ labels }: HeaderNavDropdownProps) {
  return (
    <ul className={styles.headerNavDropdown}>
      {labels.map((label, labelIndex) => (
        <li className={styles.headerNavDropdown__item} key={labelIndex}>
          {label}
        </li>
      ))}
    </ul>
  );
}
