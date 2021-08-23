import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <section className={styles.header}>
        <div className={styles.headerWords}>
          <h1 className={styles.header__title}>Hey, I’m Luis</h1>
          <p className={styles.header__paragraph}>
            a <b>Frontend Developer</b> and <b> Ui/Ux Designer</b> I specialize
            in Web and Mobile Development
          </p>
        </div>
        <div className={styles.headerSocials}>
          <a href="">Github</a>
          <a href="">Linkedin</a>
        </div>
      </section>
    </div>
  );
};

export default Header;
