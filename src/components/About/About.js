import styles from "./About.module.css";
import Image from "next/image";
import profilePic from '../../assets/img/luis-profile.png';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutLeft}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          eros, turpis morbi mi praesent. Consectetur adipiscing elit. Scelerisque
          
        </p>
        <a className={styles.about__meet} href="">Conocer màs</a>
      </div>
      <div>
        <Image
        className={styles.about__img}
          src={profilePic}
          alt="Picture of the author"
          width={300}
          height={310}
          responsive
        />
      </div>
    </section>
  );
};

export default About;
