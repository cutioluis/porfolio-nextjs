import styles from "./ProjectsCard.module.css";

const ProjectsCard = () => {
  return (
    <section className={styles.ProjectsCard}>
      <article className={styles.projects_card}>
        <div className={styles.projects_card__container}>
          <div className={styles.projects_card__cube}></div>
          <div className={styles.projects_card__description}>
            <h3>Porfolio web </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eros, turpis morbi mi praesent. Sit blandit vulputate proin 
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
