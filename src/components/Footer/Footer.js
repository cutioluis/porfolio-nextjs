import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Designed & Built by <span className={styles.footer_ancor}>Luis Cutiopala</span></p>
    </footer>
  );
};

export default Footer;
