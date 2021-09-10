import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { COLORS, FONTS, LINKS } from "../../constants/";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  a {
    font-size: 1.5rem;
    margin-bottom: 0;
    margin-left: 12px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 18px;
  border-radius: 0.35rem;
  transition: 0.1s;
  padding: 1rem 1.25rem;
  a {
    color: ${COLORS.transparentText};
    font-size: 14px;
  }
  &:hover {
    background-color: ${COLORS.lightBackground};
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Link passHref href="/">
        <LogoContainer>
          <a>dev</a>
        </LogoContainer>
      </Link>
      <NavBar>
        {React.Children.toArray(
          Object.values(LINKS).map((link) => {
            return (
              <LinkContainer key={link.title}>
                <Link passHref href={link.url}>
                  {link.title}
                </Link>
              </LinkContainer>
            );
          })
        )}
      </NavBar>
    </Container>
  );
};

export default Navbar;
