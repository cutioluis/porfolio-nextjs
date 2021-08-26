import React, { useState } from "react";
import Layout from "../layout/Layout";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";

export default function Home() {
  const [ligth, setligth] = useState(true);

  return (
    <div className={ligth ? "light-mode" : "dark-mode"}>
      <Layout>
        <Header />
        <About />
        <ProjectsCard></ProjectsCard>
      </Layout>
    </div>
  );
}
