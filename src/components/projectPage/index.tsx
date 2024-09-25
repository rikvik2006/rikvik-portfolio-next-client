import { FC } from "react";
import style from "./index.module.scss";
import { FaSquareGithub } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

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
                <img src={image} alt={title} />
            </div>
            <div className={style.infoContainer}>
                <h1 className={style.projectTitle}>{title}</h1>
                <div className={style.descriptionRow}>
                    <p className={style.description}>{description}</p>
                    <div className={style.buttonsContainer}>
                        <a
                            className={style.externalLink}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TbExternalLink />
                        </a>
                        {github && (
                            <a
                                className={style.githubLink}
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaSquareGithub />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
