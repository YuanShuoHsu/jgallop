import logo from "../../images/Footer/logo.svg";
import weixinzhifu from "../../images/Footer/weixinzhifu.png";
import alipay from "../../images/Footer/alipay.png";

import styles from "./index.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__imgBox}>
        <img className={styles.footer__image} src={logo} alt="logo" />
      </div>
      <div className={styles.footer__content}>
        <ul className={styles.footer__list}>
          <li className={styles.footer__listItem}>
            <h3 className={styles.footer__heading}>認識放假趣</h3>
            <p className={styles.footer__listItemText}>關於放假趣</p>
            <p className={styles.footer__listItemText}>常見問題與幫助</p>
          </li>
          <li className={styles.footer__listItem}>
            <h3 className={styles.footer__heading}>網站條款</h3>
            <p className={styles.footer__listItemText}>服務條款</p>
            <p className={styles.footer__listItemText}>隱私政策</p>
          </li>
          <li className={styles.footer__listItem}>
            <h3 className={styles.footer__heading}>聯絡我們</h3>
          </li>
          <li className={styles.footer__listItem}>
            <h3 className={styles.footer__heading}>支付方式</h3>
            <div className={styles.footer__paymentMethod}>
              <img
                className={styles.footer__paymentImage}
                src={weixinzhifu}
                alt="weixinzhifu"
              />
            </div>
            <div className={styles.footer__paymentMethod}>
              <img
                className={styles.footer__paymentImage}
                src={alipay}
                alt="alipay"
              />
            </div>
          </li>
        </ul>
        <p className={styles.footer__copyright}>
          COPYRIGHT © 2018 FUNJATRIP All rights reserved.
        </p>
      </div>
      <hr className={styles.footer__separator} />
      <div className={styles.footer__companyInfo}>
        <h2 className={styles.footer__companyName}>
          引時通（北京）科技有限公司
        </h2>
        <p className={styles.footer__address}>
          地址：北京市朝陽區建國路15號院甲1號北岸1292三間房創意生活園區9-7101
        </p>
        <p className={styles.footer__email}>e-mail：service@funjatrip.com</p>
      </div>
    </div>
  );
}
