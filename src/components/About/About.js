import Skills from "../Skills/Skills";
import styled from "styled-components";

import {COLORS, SIZES } from "../../constants/";

const Container = styled.div`
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

const SectionInfo = styled.div `
    max-width: 70%;
`

const About = () => {
  return (
    <Container>
      <AboutSection>
        <SectionInfo>
          <h2>About me</h2>
          <p>
            Hello! My name is Luis and I enjoy creating things that live on the
            internet. My interest in web development started back in 2018 when I
            decided to try editing custom Tumblr themes — turns out hacking
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
