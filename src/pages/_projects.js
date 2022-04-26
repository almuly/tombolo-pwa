import React from "react";

import ProjectCard from "../components/ProjectCard";

import Typography from "@mui/material/Typography";
import {Alert, Grid, Snackbar} from "@mui/material";

import {useProjectContext} from "../lib/context/projectContext";

import style from "../styles/projects.module.sass"

function Projects({data}) {

    const {
        isLoading,
        isSuccess,
        setIsSuccess,
        message
    } = useProjectContext()

    const handleCloseBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSuccess(false);
    }

    if (isLoading) return <p className={style.text}>Loading...</p>
    return (
        <>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={isSuccess} onClose={handleCloseBar}
                      autoHideDuration={2000}>
                <Alert onClose={() => handleCloseBar} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>
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