import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Poppins",
        title: {
            fontSize: 14,
            fontWeight: 600
        },
        title2: {
            fontSize: 14,
            fontWeight: 400
        },
        body1: {
            fontSize: 12,
            fontWeight: 400
        },
        subtitle1:{
            fontSize: 12,
            fontWeight: 500,
            textTransform:"capitalize"
        }
    },
    palette: {
        primary: {
            main: '#114BC2',
            secondary: '#E5E5E5'
        },
        text: {
            main: '#130F26',
            secondary: '#898793'
        },
        background: {
            default: '#ffffff',
            secondary: '#F4F5F7',
        }

    },
});

export default theme;
