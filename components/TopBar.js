import * as React from 'react';
import {Grid, IconButton, Paper, Typography} from "@mui/material";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import style from "../styles/topBar.module.sass"

export default function TopBar() {
    return (
        <Paper className={style.paperWrapper}>
            <Grid className={style.topBarWrapper}>
                <Typography variant='title'>Projects</Typography>
                <IconButton>
                    <ExpandMoreOutlinedIcon/>
                </IconButton>
            </Grid>
        </Paper>
    );
}