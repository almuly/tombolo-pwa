import * as React from 'react';
import {Button} from "@mui/material";

import style from "../styles/fulfilledButton.module.sass"

export default function FulfilledButton({
                                            label, onClick = () => {
    }
                                        }) {

    return (
        <Button
            variant='contained'
            className={style.fulfilledButton}
            onClick={onClick}
        >
            {label}
        </Button>
    );
}