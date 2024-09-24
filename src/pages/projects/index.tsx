import { GetServerSidePropsContext, NextPage } from "next";
import style from "./index.module.scss";
import ProjectCard from "../../components/projectPage";
import { useContext } from "react";
import { ConditionalRenderingContext } from "../../utils/contexts/conditionalRendering";

type ProjectPageProps = {
    renderServices: boolean;
};

const ProjectPage: NextPage<ProjectPageProps> = ({ renderServices }) => {
    const { setRenderServicies } = useContext(ConditionalRenderingContext);
    setRenderServicies(renderServices);

    return (
        <div className={style.container}>
            <ProjectCard
                title="Project 1"
                description="This is a description"
                image="/EmulshroomSponsorLigthImage_WhiteText.png"
                link="https://emulshroom.vercel.app/"
                github="https://github.com/rikvik2006/Emulshroom"
            />
        </div>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const renderServices = process.env.RENDER_SERVICES;
    return {
        props: {
            renderServices,
        },
    };
};
export default ProjectPage;
