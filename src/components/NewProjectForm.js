import * as React from 'react';
import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";

import theme from "../theme";
import FulfilledButton from "./FulfilledButton";
import {useState} from "react";
import {useProjectContext} from "../lib/context/projectContext";

import style from "../styles/newProjectForm.module.sass"
import CalendarIcon from "../assets/icons/CalendarIcon";
import styles from "../styles/editForm.module.sass";
import Box from "@mui/material/Box";

export default function NewProjectForm({handleClose}) {
    const {onClickUpdate} = useProjectContext()
    const [formData, setFormData] = useState({})
    const projectId = new Date().getMilliseconds()

    return (
        < Grid sx={{
            width: "100%",

        }}>
            <Grid className={style.containerWrapper}>
                <Grid className={style.containerFormWrapper}>
                    <IconButton>
                        <CalendarIcon className={style.icon}/>
                    </IconButton>
                    <Typography
                        variant="title2"
                        color={theme.palette.text.main}
                    >Due Date</Typography>
                </Grid>
                <TextField
                    fullWidth
                    sx={{backgroundColor: theme.palette.background.secondary, fontSize: 14}}
                    label={'Project Name'}
                    onChange={event => {
                        setFormData({id: projectId, name: event.target?.value, createdBy: 'Alex'})
                    }}
                />
                <Grid className={style.actionWrapper}>
                    <Button
                        className={style.cancelButton}
                        variant={'outlined'}
                        onClick={handleClose}> Cancel</Button>
                    <Grid sx={{width: "45%"}}>
                        <FulfilledButton onClick={() => {
                            onClickUpdate(formData, 'POST')
                            handleClose()
                        }} label={"Create Project"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export function RenameForm({handleClose, projectName, id}) {
    const {onClickUpdate} = useProjectContext()
    const [query, setQuery] = useState('')

    return (
        < Grid sx={{
            width: "100%",
        }}>
            <Box className={styles.columnWrapper}>
                <TextField
                    fullWidth
                    defaultValue={projectName}
                    sx={{
                        marginRight: 1.5,
                        backgroundColor: theme.palette.background.secondary,
                        fontSize: 14
                    }}
                    label={'New Project Name'}
                    onChange={event => setQuery(event.target?.value)}
                />

                <Grid className={style.actionWrapper}>
                    <Button
                        className={style.cancelButton}
                        variant={'outlined'}
                        onClick={handleClose}> Cancel</Button>
                    <Grid sx={{width: "45%"}}>
                        <FulfilledButton
                            onClick={() => {
                                onClickUpdate({id: id, name: query}, 'PUT')
                                handleClose()
                            }}
                            label={"Rename Project"}/>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}