import * as FaIcons from 'react-icons/fa';

import styles from '../styles/components/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img src="./images/logo.png" alt="" />
      <div className={styles.social}>
        <a href="https://www.instagram.com/labellanr">
          <FaIcons.FaInstagram />
        </a>
        <a href="https://www.facebook.com/labellanr">
          <FaIcons.FaFacebookSquare />
        </a>
        <a href="https://www.api.whatsapp.com/send?phone=558899566908">
          <FaIcons.FaWhatsapp />
        </a>
      </div>
    </div>
  );
}