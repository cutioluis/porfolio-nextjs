import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div>
        <p className={styles.skills__title}>Tecnologias</p>
      </div>
      <ul>
        <li>Web development</li>
        <li>Mobile development</li>
        <li>DEVOPS</li>
        <li>Backed development</li>
      </ul>
    </div>
  );
};

export default Skills;
