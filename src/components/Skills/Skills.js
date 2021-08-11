import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div>
        <p className={styles.skills__title}>Tecnologias</p>

        <div className={styles.skills__left}>
          <p>▶ React.js</p>
          <p>▶ JavaScript</p>
          <p>▶ Figma </p>
        </div>

        <div className={styles.skills__left}>
          <p>▶ Next.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
