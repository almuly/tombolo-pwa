import React from 'react';

import {Grid, IconButton, Typography} from "@mui/material";

import {useProjectContext} from "../lib/context/projectContext";

import styles from '../styles/editForm.module.sass'
import ScanIcon from "../assets/icons/ScanIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";
import FolderIcon from "../assets/icons/FolderIcon";
import useModal from "../lib/hooks/useModal";
import {ModalPopup} from "./ModalPopup";
import {RenameForm} from "./NewProjectForm";

export default function EditForm({id, projectName, handleCloseModal}) {
    const {onClickUpdate} = useProjectContext()
    const {open, handleClose, handleOpen} = useModal()


    return (
        < Grid sx={{
            width: "100%",
        }}>
            <Grid className={styles.wrapper}>
                <Grid className={styles.rowWrapper}>
                    <IconButton onClick={() => {
                        handleOpen()
                    }
                    }>
                        <ScanIcon className={styles.icon + ' ' + styles.rotate}/>
                        <Typography>Rename</Typography>
                    </IconButton>
                </Grid>
                <Grid className={styles.rowWrapper}>
                    <IconButton onClick={() => {
                        onClickUpdate({id: id, archived: true}, 'PUT')
                        handleCloseModal()
                    }}>
                        <FolderIcon className={styles.icon}/>
                        <Typography>Move to Done/Archive</Typography>
                    </IconButton>
                </Grid>
                <Grid className={styles.rowWrapper}>
                    <IconButton
                        onClick={() => {
                            onClickUpdate({id: id}, 'DELETE')
                            handleClose()
                        }}>
                        <DeleteIcon className={styles.deleteIcon}/>
                        <Typography>Delete</Typography>

                    </IconButton>
                </Grid>
            </Grid>
            <ModalPopup
                header
                title="Rename form"
                handleClose={handleCloseModal}
                open={open}
                component={<RenameForm handleClose={handleCloseModal} id={id} projectName={projectName}/>}/>
        </Grid>
    );
}