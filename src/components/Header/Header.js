import styled from "styled-components";
import { siteMetadata } from "../../data/siteMetadata";
import { COLORS, SIZES } from "../../constants/";

const ContainerHeader = styled.section`
  text-align: center;
  margin: ${SIZES.marginHero};
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
  margin: 0 10px;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <Greeting>{siteMetadata.title}</Greeting>
      <Description>{siteMetadata.description}</Description>
      <ContainerSocials>
        <SocialItem>Linkedin</SocialItem>
        <SocialItem>Github</SocialItem>
      </ContainerSocials>
    </ContainerHeader>
  );
};

export default Header;
