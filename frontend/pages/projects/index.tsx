import Layout from "@/components/layout";
import ProjCard from "@/components/projCard/projCard";
import proj from "@/public/resources/projects.json"
const Projects = () => (
  <Layout title={"Projects"}>
      <section className="flex xl:flex-row flex-col pb-10">
      <ProjCard projects={proj.projects}/>
      </section>
    </Layout>
);

export default Projects;
