import { ThemeProvider, createTheme } from "@mui/material/styles";

const datagridTheme = createTheme({
    fontFamily: 'Poppins',
});

export default function datagridTheme() {
    return <ThemeProvider theme = {datagridTheme}>...</ThemeProvider>;
}