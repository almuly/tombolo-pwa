import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import {Grid, IconButton, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

import style from "../styles/modalPopupr.module.sass"

export function ModalPopup({component, title, open, handleClose, header = false}) {

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div>
                <Paper className={style.popup}>
                    <Grid container justifyContent='space-between'>
                        {header && <>
                            <Typography variant='title'>{title}</Typography>
                            <IconButton
                                onClick={handleClose}>
                                <CloseIcon/>
                            </IconButton>
                        </>}
                        {component}
                    </Grid>
                </Paper>
            </div>
        </Modal>
    );
}