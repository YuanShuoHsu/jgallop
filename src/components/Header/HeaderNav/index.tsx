import { useState, useEffect, useRef } from "react";
import HeaderNavDropdown from "./HeaderNavDropdown";

import menuItems, {
  MenuItem,
} from "../../../datasets/Header/HeaderNav/headerNavItems";

import styles from "./index.module.scss";

export default function HeaderNav() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const headerNavRef = useRef<HTMLUListElement | null>(null);

  const handleDropdownClick = (index: number) => {
    setActiveDropdown((prevActive) => (prevActive === index ? null : index));
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        headerNavRef.current &&
        !headerNavRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <ul className={styles.headerNav} ref={headerNavRef}>
      {menuItems.map((menuItem: MenuItem, index: number) => (
        <li
          className={`${styles.headerNav__item} ${
            index === activeDropdown ? styles["headerNav__item--active"] : ""
          }`}
          key={index}
          onClick={() => handleDropdownClick(index)}
        >
          <span className={styles.headerNav__itemText}>
            {menuItem.label[0]}
          </span>
          {menuItem.label.length > 1 && (
            <span className={styles.headerNav__itemCaret} />
          )}
          {menuItem.label.length > 1 && (
            <HeaderNavDropdown
              labels={menuItem.label.slice(1)}
              isActive={index === activeDropdown}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
