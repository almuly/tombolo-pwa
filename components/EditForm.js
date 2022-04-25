import React, {useState} from 'react';

import {Alert, Button, Grid, IconButton, Snackbar, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useProjectContext} from "../lib/context/projectContext";

import styles from '../styles/editForm.module.sass'
import Box from "@mui/material/Box";
import theme from "../src/theme";
import ScanIcon from "../assets/icons/ScanIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";
import FolderIcon from "../assets/icons/FolderIcon";

export default function EditForm({id, projectName, handleClose}) {

    const {setData} = useProjectContext()
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState(false)
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')


    const onClick = async (data, method) => {
        let baseUrl = '/api/project-data'
        let options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const response = await fetch(baseUrl, options)
        const result = await response.json()
        setData(result.data)
        if (response.status === 201) {
            setIsSuccess(true)
            setMessage(result.message)
            setTimeout(() => {
                handleClose()
            }, 1500)
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
            <Grid className={styles.wrapper}>

                <Grid className={styles.rowWrapper}>
                    <IconButton onClick={() => setOpen(!open)}>
                        <ScanIcon className={styles.icon + ' ' + styles.rotate}/>
                        {!open && <Typography>Rename</Typography>}
                    </IconButton>
                    {open && <Box className={styles.rowWrapper}>
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
                        <Button
                            variant={'outlined'}
                            className={styles.sendButton}
                            startIcon={<AddIcon/>}
                            onClick={() => onClick({id: id, name: query}, 'PUT')}>
                            Send
                        </Button>
                    </Box>}

                </Grid>
                <Grid className={styles.rowWrapper}>
                    <IconButton onClick={() => onClick({id: id, archived: true}, 'PUT')}>
                        <FolderIcon className={styles.icon}/>
                        <Typography>Move to Done/Archive</Typography>
                    </IconButton>
                </Grid>
                <Grid className={styles.rowWrapper}>
                    <IconButton
                        onClick={() => onClick({id: id}, 'DELETE')}>
                        <DeleteIcon className={styles.deleteIcon}/>
                        <Typography>Delete</Typography>

                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}