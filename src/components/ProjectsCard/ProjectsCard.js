import styled from "styled-components";

import { projects } from "../../constants/constants";
import { COLORS, SIZES } from "../../constants/";

const ContainerMain = styled.div`
  width: ${SIZES.marginWidth}px;
  margin: 0 auto;
`;

const TitleProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: ${SIZES.marginWidth}px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const CardProject = styled.article`
  transition: transform 150ms;
  padding: 20px;
  margin: 20px 0;
  background: ${COLORS.background};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
    transition: 150ms;
  }
`;

const ProjectDetails = styled.div`
  padding: 15px;
  max-width: 50%;
`;

const DetailsToo = styled.div`
  margin: 20px 0;

  a {
    font-weight: 600;
    color: ${COLORS.linkColor};
    margin-right: 25px;
  }
`;

const ProjectsCard = () => {
  return (
    <ContainerMain>
      <TitleProjects>
        <h2>Projects</h2>
        <span>See all projectss</span>
      </TitleProjects>
      <Container>
        <SubContainer>
          {projects.map((project) => (
            <CardProject key={project.id}>
              <ProjectDetails>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <DetailsToo>
                  <a>Demo</a>
                  <a>Code</a>
                </DetailsToo>
              </ProjectDetails>
            </CardProject>
          ))}
        </SubContainer>
      </Container>
    </ContainerMain>
  );
};

export default ProjectsCard;
