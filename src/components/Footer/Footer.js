import styled from "styled-components";
import { COLORS } from "../../constants/";

const SectionFooter = styled.footer`
  text-align: center;
  margin: 30px 0;
`;

const FooterItem = styled.span`
  color: ${COLORS.linkColor};
`;

const Footer = () => {
  return (
    <SectionFooter>
      <p>
        Designed & Built by{" "}
        <FooterItem>Luis Cutiopala</FooterItem>
      </p>
    </SectionFooter>
  );
};

export default Footer;
