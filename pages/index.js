import React, {useState} from 'react';

import {Grid, Container, Typography} from "@mui/material";
import BottomNavbar from "../components/BottomNavbar";
import TopBar from "../components/TopBar";
import BasicTabs, {TabPanel} from "../components/TabPanel";
import FulfilledButton from "../components/FulfilledButton";
import {ModalPopup} from "../components/ModalPopup";
import NewProjectForm from "../components/NewProjectForm";

import Projects from "./_projects";
import useModal from "../hooks/useModal";
import {useProjectContext} from "../lib/context/projectContext";

import style from "../styles/main.module.sass"

export default function Home() {
    const [value, setValue] = useState(0);
    const [title, setTitle] = useState(0);
    const [component, setComponent] = useState(0);
    const {open, handleClose, handleOpen} = useModal()
    const {
        data,
        filteredData,
    } = useProjectContext()

    const handleClick = (text, component) => {
        handleOpen();
        setComponent(component);
        setTitle(text);
    };


    return (
        <>
            <ModalPopup
                header
                handleClose={handleClose}
                open={open}
                title={title}
                component={component}/>
            <Container
                maxWidth="sm"
                className={style.containerWrapper}
            >
                <TopBar/>
                <BasicTabs
                    value={value}
                    setValue={setValue}
                />
                <Grid className={style.buttonContainer}>
                    <FulfilledButton
                        onClick={() => handleClick('New Project', <NewProjectForm handleClose={handleClose}/>)}
                        label='New Project'/>
                </Grid>
                <Grid className={style.mainContainer}>
                    <TabPanel value={value} index={0}>
                        {data ? <Projects data={data}/> :
                            <Grid className={style.wrapper}>
                                <Typography className={style.text}>
                                    You do not have any projects created yet. Please press “New Project” button to
                                    create
                                    your
                                    first
                                    project
                                </Typography>
                            </Grid>}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Projects data={filteredData?.createdByUser}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Projects data={filteredData?.shared}/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Projects data={filteredData?.archived}/>
                    </TabPanel>

                </Grid>
                <BottomNavbar/>
            </Container>
        </>
    )
}
