import React, {useState} from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {Container} from "@mui/material";

import styles from '../styles/bottomNavbar.module.sass'


export default function BottomNavbar() {
    const [value, setValue] = useState(0);

    return (
        <Container maxWidth="sm" className={styles.containerWrapper}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<HomeRoundedIcon/>}/>
                <BottomNavigationAction icon={<FolderRoundedIcon/>}/>
                <BottomNavigationAction icon={<AccountBalanceWalletOutlinedIcon/>}/>
                <BottomNavigationAction icon={<NotificationsNoneOutlinedIcon/>}/>
                <BottomNavigationAction icon={<PersonOutlineOutlinedIcon/>}/>
            </BottomNavigation>
        </Container>
    );
}