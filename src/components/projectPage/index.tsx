import { FC } from "react";
import style from "./index.module.scss";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string | null;
};

const ProjectCard: FC<ProjectCardProps> = ({
    title,
    description,
    image,
    link,
    github,
}) => {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={link} alt={title} />
            </div>
        </div>
    );
};

export default ProjectCard;
