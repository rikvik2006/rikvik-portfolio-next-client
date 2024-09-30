import { GetServerSidePropsContext, NextPage } from "next";
import style from "./index.module.scss";
import ProjectCard from "../../components/projectPage";
import { useContext } from "react";
import { ConditionalRenderingContext } from "../../utils/contexts/conditionalRendering";
import { projectList } from "../../utils/projectsList";

type ProjectPageProps = {
    renderServices: boolean;
};

const ProjectPage: NextPage<ProjectPageProps> = ({ renderServices }) => {
    const { setRenderServicies } = useContext(ConditionalRenderingContext);
    setRenderServicies(renderServices);

    return (
        <div className={style.container}>
            <div className={style.projectGrid}>
                {projectList.map((projectList, index) => (
                    <ProjectCard
                        key={index}
                        title={projectList.title}
                        description={projectList.description}
                        image={projectList.image}
                        link={projectList.link}
                        github={projectList.github}
                    />
                ))}
            </div>
        </div>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const renderServices = process.env.RENDER_SERVICES == "true";
    return {
        props: {
            renderServices,
        },
    };
};
export default ProjectPage;
