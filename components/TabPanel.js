import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Grid, Paper} from "@mui/material";
import theme from "../src/theme";
import {useProjectContext} from "../lib/context/projectContext";

import style from "../styles/tabs.module.sass"

export function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Grid sx={{width: "100%"}}
              role="tabpanel"
              hidden={value !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              {...other}
        >
            {value === index && (
                <Grid>
                    {children}
                </Grid>
            )}
        </Grid>
    );
}


export default function BasicTabs({value, setValue}) {
    const {
        data,
        filteredData,
    } = useProjectContext()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{width: '100%', paddingTop: theme.spacing(3)}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab className={style.button} label={`All ${data?.length}`}/>
                    <Tab className={style.button} label={`My ${filteredData?.createdByUser?.length}`}/>
                    <Tab className={style.button} label={`Shared ${filteredData?.shared?.length}`}/>
                    <Tab className={style.button} label={`Archived ${filteredData?.archived?.length}`}/>
                </Tabs>
            </Box>
        </Paper>

    );
}