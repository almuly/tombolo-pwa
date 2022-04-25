import * as React from 'react';
import {Alert, Button, Grid, IconButton, Snackbar, TextField, Typography} from "@mui/material";

import theme from "../src/theme";
import FulfilledButton from "./FulfilledButton";
import {useState} from "react";
import {useProjectContext} from "../lib/context/projectContext";

import style from "../styles/newProjectForm.module.sass"
import CalendarIcon from "../assets/icons/CalendarIcon";

export default function NewProjectForm({handleClose}) {
    const {setData} = useProjectContext()
    const [formData, setFormData] = useState({})
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState(false)
    const projectId = new Date().getMilliseconds()

    const onClick = async (data) => {
        const response = await fetch('/api/project-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        setData(result.data)
        if (response.status === 201) {
            setIsSuccess(true)
            setMessage(result.message)
            setTimeout(() => {
                handleClose()
            }, 1000)
        }

    }

    return (
        < Grid sx={{
            width: "100%",

        }}>
            {<Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={isSuccess} autoHideDuration={3}>
                <Alert onClose={handleClose} severity={isSuccess ? "success" : "error"} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>}
            <Grid className={style.containerWrapper}>
                <Grid className={style.containerFormWrapper}>
                    <IconButton>
                        <CalendarIcon className={style.icon} />
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
                        <FulfilledButton onClick={() => onClick(formData)} label={"Create Project"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}