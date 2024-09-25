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
            <div className={style.projectGrid}>
                {new Array(5).fill(0).map((_, index) => (
                    <ProjectCard
                        key={index}
                        title="Emulshroom"
                        description="Emulshroom is a starup that sell emulsionant products for the food industry. The website is a e-commerce platform that allows users to buy products and learn more about the company."
                        image="/EmulshroomSponsorLigthImage_WhiteText.png"
                        link="https://emulshroom.vercel.app/"
                        github="https://github.com/rikvik2006/Emulshroom"
                    />
                ))}
            </div>
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
