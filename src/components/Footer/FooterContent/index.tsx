import { Link } from "react-router-dom";

import FooterCopyright from "../FooterCopyright";

import weixinzhifu from "../../../images/Footer/weixinzhifu.png";
import alipay from "../../../images/Footer/alipay.png";

import styles from "./index.module.scss";

export default function FooterContent() {
  return (
    <div className={styles.footerContent}>
      <ul className={styles.footerContent__list}>
        <li className={styles.footerContent__listItem}>
          <h4 className={styles.footerContent__heading}>認識放假趣</h4>
          <Link className={styles.footerContent__listItemLink} to="">
            <p className={styles.footerContent__listItemText}>關於放假趣</p>
          </Link>
          <Link className={styles.footerContent__listItemLink} to="">
            <p className={styles.footerContent__listItemText}>常見問題與幫助</p>
          </Link>
        </li>
        <li className={styles.footerContent__listItem}>
          <h4 className={styles.footerContent__heading}>網站條款</h4>
          <Link className={styles.footerContent__listItemLink} to="">
            <p className={styles.footerContent__listItemText}>服務條款</p>
          </Link>
          <Link className={styles.footerContent__listItemLink} to="">
            <p className={styles.footerContent__listItemText}>隱私政策</p>
          </Link>
        </li>
        <li className={styles.footerContent__listItem}>
          <Link className={styles.footerContent__listItemLink} to="">
            <h4 className={styles.footerContent__heading}>聯絡我們</h4>
          </Link>
        </li>
        <li className={styles.footerContent__listItem}>
          <h4 className={styles.footerContent__heading}>支付方式</h4>
          <div className={styles.footerContent__paymentGroup}>
            <div className={styles.footerContent__paymentMethod}>
              <img
                className={styles.footerContent__paymentImage}
                src={weixinzhifu}
                alt="weixinzhifu"
              />
            </div>
            <div className={styles.footerContent__paymentMethod}>
              <img
                className={styles.footerContent__paymentImage}
                src={alipay}
                alt="alipay"
              />
            </div>
          </div>
        </li>
      </ul>
      <FooterCopyright />
    </div>
  );
}
