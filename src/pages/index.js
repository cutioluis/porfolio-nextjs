import Layout from "../layout/Layout";
import About from "../components/About/About";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <About />
      </Layout>
    </div>
  );
}
