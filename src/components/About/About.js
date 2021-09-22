import Skills from "../Skills/Skills";
import styled from "styled-components";

import { COLORS, SIZES } from "../../constants/";
import { siteMetadata } from "src/data/siteMetadata";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  margin: ${SIZES.margin};
  justify-content: center;
  width: 100%;
`;

const AboutSection = styled.div`
  width: ${SIZES.marginWidth}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const SectionAvatar = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${COLORS.lightBackground};
`;

const SectionInfo = styled.div`
  max-width: 60%;
`;

const About = () => {
  return (
    <Container>
      <AboutSection>
        <SectionInfo>
          <h2>{siteMetadata.aboutMe.title}</h2>
          <p>{siteMetadata.aboutMe.description}</p>
          <br />
          <Skills />
        </SectionInfo>
        <SectionAvatar></SectionAvatar>
      </AboutSection>
    </Container>
  );
};

export default About;
