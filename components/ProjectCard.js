import * as React from 'react';
import {Card, CardActions, Grid, IconButton} from "@mui/material";
import theme from "../src/theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "next/image";
import Typography from "@mui/material/Typography";
import useModal from "../hooks/useModal";
import {ModalPopup} from "./ModalPopup";
import EditForm from "./EditForm";

import style from "../styles/projectCard.module.sass"

export default function ProjectCard({name, image, id}) {

    const {open, handleClose, handleOpen} = useModal()

    return (
        <Card
            className={style.cardWrapper}
            sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.main,
            }}
        >
            <Typography>
                {name}
            </Typography>
            <Grid container width='auto'>
                {image && <Image src={image} width='26' height='26'/>}
                <CardActions>
                    <IconButton  onClick={handleOpen}>
                        <MoreVertIcon className={style.icon}/>
                    </IconButton>
                </CardActions>
            </Grid>
            <ModalPopup
                handleClose={handleClose}
                open={open}
                component={<EditForm handleClose={handleClose} id={id} projectName={name}/>}/>
        </Card>
    );
}