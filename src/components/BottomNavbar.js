import React, {useState} from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Container} from "@mui/material";

import styles from '../styles/bottomNavbar.module.sass'
import WalletIcon from "../assets/icons/WalletIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import FolderIcon from "../assets/icons/FolderIcon";
import NotificationsIcon from "../assets/icons/NotificationsIcon";
import UserIcon from "../assets/icons/UserIcon";

import clsx from 'clsx';


export default function BottomNavbar() {
    const [value, setValue] = useState(0);


    return (
        <Container maxWidth="sm" className={styles.containerWrapper}>
            <BottomNavigation
                className={styles.icon}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction icon={<HomeIcon className={clsx(value === 0 && styles.activeIcon)}/>}/>
                <BottomNavigationAction icon={<FolderIcon className={clsx(value === 1 && styles.activeIcon)}/>}/>
                <BottomNavigationAction icon={<WalletIcon className={clsx(value === 2 && styles.activeIcon)}/>}/>
                <BottomNavigationAction icon={<NotificationsIcon className={clsx(value === 3 && styles.activeIcon)}/>}/>
                <BottomNavigationAction icon={<UserIcon className={clsx(value === 4 && styles.activeIcon)}/>}/>
            </BottomNavigation>
        </Container>
    );
}