import React from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <ProjectsCard />
    </>
  );
}
