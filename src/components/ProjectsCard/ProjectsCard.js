import styles from "./ProjectsCard.module.css";
import Image  from "next/image";

import { projects } from "../../constants/constants";

const ProjectsCard = () => {
  return (
    <section className={styles.ProjectsCard}>
      {projects.map((project) => (
        <article key={project.id} className={styles.projects_card}>
          <div className={styles.projects_card__container}>
            <div className={styles.projects_card__cube}>
              <Image
                className={styles.about__cube}
                src={project.image}
                alt="Project"
                width={250}
                height={150}
              />
            </div>
            <div className={styles.projects_card__description}>
              <h3 className={styles.projects_card__title}>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projects_card_code}>
                <a href={project.visit}>Demo</a>
                <a href={project.source}>Code</a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProjectsCard;
