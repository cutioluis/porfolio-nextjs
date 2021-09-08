import styled from "styled-components";
import { COLORS } from "../../constants/";

const ContainerHeader = styled.section`
  text-align: center;
  padding: 10px;
`;
const Greeting = styled.h1``;

const Description = styled.p`
  color: ${COLORS.transparentText};
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerSocials = styled.div`
  text-align: center;
  margin: 20px;
`;

const SocialItem = styled.a`
  cursor: pointer;
  color: ${COLORS.linkColor};
  font-weight: 500;
  margin: 0 20px;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <Greeting>Hey, I’m Luis</Greeting>
      <Description>
        a <b>Frontend Developer</b> and <b> Ui/Ux Designer</b> I specialize in
        Web and Mobile Development
      </Description>
      <ContainerSocials>
        <SocialItem>Linkedin</SocialItem>
        <SocialItem>Github</SocialItem>
      </ContainerSocials>
    </ContainerHeader>
  );
};

export default Header;
