import Skills from "../Skills/Skills";
import styled from "styled-components";

import { COLORS, SIZES } from "../../constants/";

const Container = styled.div`
  height: 80vh;
  display: flex;
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
          <h2>About me</h2>
          <p>
            <b> Hello! My name is Luis</b> and I enjoy creating things that live
            on the internet. My interest in web development started back in{" "}
            <b>2017</b> when I decided to try editing page web of Facebook and
            Google Search, using the famous: Inspect elements
          </p>
          <br />
          <Skills />
        </SectionInfo>
        <SectionAvatar></SectionAvatar>
      </AboutSection>
    </Container>
  );
};

export default About;
