import styled from "styled-components";
import { COLORS } from "../../constants/";

const SectionFooter = styled.footer`
  text-align: center;
  margin: 30px 0;
`;

const FooterItem = styled.span`
  color: ${COLORS.linkColor};
`;

const FooterTitle = styled.p `
  font-size: 16px;
`

const Footer = () => {
  return (
    <SectionFooter>
      <FooterTitle>
        Designed & Built by <FooterItem>Luis Cutiopala</FooterItem>
      </FooterTitle>
    </SectionFooter>
  );
};

export default Footer;
