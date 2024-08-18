import Layout from "@/components/layout";
import ProjCard from "@/components/projCard/projCard";
import proj from "@/public/resources/projects.json"
const Projects = () => (
  <Layout title={"Projects"}>
      <ProjCard projects={proj.projects}/>
    </Layout>
);

export default Projects;
