import styles from "./ProjectsCard.module.css";
import Image from "next/image";
import homePic from '../../assets/img/luis-home.png'

const ProjectsCard = () => {
  return (
    <section className={styles.ProjectsCard}>
      <article className={styles.projects_card}>
        <div className={styles.projects_card__container}>
          <div className={styles.projects_card__cube}>
            <Image
              className={styles.about__cube}
              src={homePic}
              alt="Project"
              width={300}
              height={200}
              responsive
            />
          </div>
          <div className={styles.projects_card__description}>
            <h3>Porfolio web </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque eros, turpis
            </p>
            <div className={styles.projects_card_code}>
              <a href="">Demo</a>
              <a href="">Code</a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectsCard;
