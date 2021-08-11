import Layout from "../layout/Layout";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import ProjectsTitle from "../components/ProjectsTitle/ProjectsTitle";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";




export default function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <About />
        <ProjectsTitle></ProjectsTitle>
        <ProjectsCard></ProjectsCard>
      </Layout>
    </div>
  );
}
