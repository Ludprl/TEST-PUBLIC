import MyTable from "./MyTable";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Assurez-vous d'importer le chemin correct
import CssBaseline from "@mui/material/CssBaseline";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme />
                    <MyTable />
                </ThemeProvider>
            </header>
        </div>
    );
}

export default App;
