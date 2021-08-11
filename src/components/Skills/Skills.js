import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div>
        <p className={styles.skills__title}>Tecnologias</p>

        <div className={styles.skills__left}>
          <p>▶ Web development</p>
          <p>▶ Mobile development</p>
          <p>▶ Ui/Ux Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
