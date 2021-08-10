import styles from './Header.module.css'

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.headerWords}>
        <h1 className={styles.header__title}>Hi I'm Luis</h1>
        <p className={styles.header__paragraph}>
          <b>Ui/Ux Designer</b> and <b>Frontend Dev</b> i liked build websites
          with ecxlente performance
        </p>
      </div>
      <div className={styles.headerSocials}>
        <a href="">Github</a>
        <a href="">Linkedin</a>
      </div>
    </section>
  );
};

export default Header;
