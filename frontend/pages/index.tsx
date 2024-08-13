// frontend/pages/index.tsx
import Navbar from "../components/navbar";
import Hero from "./fixedCard";
import Projects from "./projects";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Layout from "@/components/layout";

const Home = () => (
  <>
    <Layout title={"Resume"}>
      <Resume />
    </Layout>
  </>
);

export default Home;
