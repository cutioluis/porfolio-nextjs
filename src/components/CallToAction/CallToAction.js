import React from "react";
import styled from "styled-components";
import { email } from "../../constants";
import { COLORS, SIZES } from "../../constants/";

const CallContainer = styled.section`
  height: 500px;
  border-top: 2px solid ${COLORS.lightBackground};
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${SIZES.marginSection};
  text-align: center;
`;

const Container = styled.div`
  max-width: 600px;
`;
const Button = styled.button`
  cursor: pointer;
  margin: 20px 0;
  height: 50px;
  width: 150px;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${COLORS.lightBackground};

  a {
    color: ${COLORS.transparentText};
  }
`;

const CallToAction = () => {
  return (
    <CallContainer>
      <Container>
        <h2>Get in touch</h2>
        <p>
          <b>¿Estas listo?</b>, para trabajar juntos y crear productos
          increibles que lleguen a millones de usuarios sin un limite definido.
          Contactame ahora para hablar de eso que tienes en mente.
        </p>
        <Button>
          <a href={`mailto:${email}`}>Say Hello</a>
        </Button>
      </Container>
    </CallContainer>
  );
};

export default CallToAction;
