import * as React from 'react';
import {Alert, Card, CardActions, Grid, IconButton, Snackbar} from "@mui/material";
import theme from "../theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "next/image";
import Typography from "@mui/material/Typography";
import useModal from "../lib/hooks/useModal";
import {ModalPopup} from "./ModalPopup";
import EditForm from "./EditForm";

import style from "../styles/projectCard.module.sass"
import {useProjectContext} from "../lib/context/projectContext";


export default function ProjectCard({name, image, id}) {

    const {open, handleClose, handleOpen} = useModal()
    const {isSuccess, setIsSuccess, message} = useProjectContext()

    const handleCloseBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSuccess(false);
    }

    return (
        <>
            {<Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={isSuccess} onClose={handleCloseBar}
                       autoHideDuration={2000}>
                <Alert onClose={() => handleCloseBar} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>}
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
                    {image && <Image alt={'Onwer'} src={image} width='26' height='26'/>}
                    <CardActions>
                        <IconButton onClick={handleOpen}>
                            <MoreVertIcon className={style.icon}/>
                        </IconButton>
                    </CardActions>
                </Grid>
                <ModalPopup
                    handleClose={handleClose}
                    open={open}
                    component={<EditForm handleCloseModal={handleClose} id={id} projectName={name}/>}/>
            </Card>
        </>
    );
}