import React from "react";

import ProjectCard from "../components/ProjectCard";

import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

import {useProjectContext} from "../lib/context/projectContext";

import style from "../styles/projects.module.sass"

function Projects({data}) {

    const {isLoading} = useProjectContext()

    if (isLoading) return <p className={style.text}>Loading...</p>
    return (
        <>
            <Grid className={style.containerWrapper}>
                <Typography className={style.text}>
                    Name
                </Typography>
                <Typography className={style.text}>
                    Owner
                </Typography>
            </Grid>
            {
                data?.map((i) =>
                    (
                        <ProjectCard
                            name={i.name}
                            image={i.image}
                            key={i.id}
                            id={i.id}
                        />
                    ))
            }
        </>

    )
}

export default Projects