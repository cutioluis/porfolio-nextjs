import styles from "./About.module.css";
import Skills from '../Skills/Skills'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutLeft}>
        <h2>About me</h2>
        <p>
          Hello! My name is Luis and I enjoy creating things that live on the
          internet. My interest in web development started back in 2018 when I
          decided to try editing custom Tumblr themes — turns out hacking
        </p>
        <br />
        <Skills />
      </div>
      <div>
      </div>
    </section>
  );
};

export default About;
