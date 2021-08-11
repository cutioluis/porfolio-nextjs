import styles from "./About.module.css";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../../../public/img/luis-profile.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutLeft}>
        <h2>About me</h2>
        <p>
          Hello! My name is Luis and I enjoy creating things that live on the
          internet. My interest in web development started back in 2018 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <br />
        <Link href="/about">
          <a className={styles.about__meet} href="">
            Conocer màs
          </a>
        </Link>
      </div>
      <div>
        <Image
          className={styles.about__img}
          src={profilePic}
          alt="Picture of the author"
          width={300}
          height={310}
        />
      </div>
    </section>
  );
};

export default About;
