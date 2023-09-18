import FooterLogo from "./FooterLogo";
import FooterContent from "./FooterContent";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterCopyright from "./FooterCopyright";

import styles from "./index.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <FooterLogo />
      </div>
      <div className={styles.footer__content}>
        <FooterContent />
      </div>
      <hr className={styles.footer__separator} />
      <div className={styles.footer__companyInfo}>
        <FooterCompanyInfo />
      </div>
      <div className={styles.footer__copyright}>
        <FooterCopyright />
      </div>
    </div>
  );
}
