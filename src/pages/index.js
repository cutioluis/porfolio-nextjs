import Layout from "../layout/Layout"
import Header from "../components/Header/Header"
import About from "../components/About/About"


export default function Home() {
  return (
    <div>
      <Layout>
          <Header />
          <About />
      </Layout>
    </div>
  )
}
