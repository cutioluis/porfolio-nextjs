import styled from "styled-components";
import { COLORS } from "../../constants/";

const SectionSkills = styled.section`
  margin: 10px 0;

  p {
    color: ${COLORS.linkColor};
    margin: 10px 0;
  }
`;

const Skills = () => {
  return (
    <SectionSkills>
      <p>Tecnologias</p>
      <li>Web development</li>
      <li>Mobile development</li>
      <li>DEVOPS</li>
    </SectionSkills>
  );
};

export default Skills;
