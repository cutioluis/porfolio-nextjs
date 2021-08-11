import Layout from "../layout/Layout";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";




export default function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <About />
        <ProjectsCard></ProjectsCard>
      </Layout>
    </div>
  );
}
