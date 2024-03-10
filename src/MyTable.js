import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
    TextField,
    Checkbox,
    Radio,
    RadioGroup,
    FormControlLabel,
    Switch,
    Slider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

import CustomTable from "./CustomTable";
import theme from "./theme"; // Assurez-vous d'importer le chemin correct
import { Container } from "@mui/material";
import DataDisplayComponent from "./DataDisplayComponent";

const data = {
    data: [
        {
            2021: "102000",
            2022: "105000",
            2023: "106000",
            2024: "150000",
            2025: "250000",
            moyendetransport: "Voiture",
        },
        {
            2021: "30000",
            2022: "40000",
            2023: "60000",
            2024: "80000",
            2025: "5000000",
            moyendetransport: "Avion",
        },
        {
            2021: "10000",
            2022: "20000",
            2023: "30000",
            2024: "80000",
            2025: "90000",
            moyendetransport: "Train",
        },
        {
            2021: "50000",
            2022: "50000",
            2023: "50000",
            2024: "60000",
            2025: "65000",
            moyendetransport: "Bus",
        },
        {
            2021: "1000",
            2022: "2000",
            2023: "2.5000",
            2024: "5000",
            2025: "7000",
            moyendetransport: "Marche",
        },
    ],
};

function Mytable() {
    return (
        <Container className="Jack" sx={{ width: "100%" }}>
            <ThemeProvider theme={theme}>
                <CustomTable data={data.data} />
                <div>
                    <h2>Composants d'entrée</h2>
                    <TextField label="TextField" variant="outlined" margin="normal" />
                    <FormControlLabel control={<Checkbox />} label="Checkbox" />
                    <FormControl component="fieldset">
                        <RadioGroup row name="radio-buttons-group">
                            <FormControlLabel
                                value="option1"
                                control={<Radio />}
                                label="Option 1"
                            />
                            <FormControlLabel
                                value="option2"
                                control={<Radio />}
                                label="Option 2"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControlLabel control={<Switch />} label="Switch" />
                    <Slider
                        defaultValue={30}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                    />
                    <FormControl variant="outlined" margin="normal">
                        <InputLabel id="select-label">Select</InputLabel>
                        <Select labelId="select-label" id="select" label="Select">
                            <MenuItem value={10}>Option 1</MenuItem>
                            <MenuItem value={20}>Option 2</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <DataDisplayComponent />
            </ThemeProvider>
        </Container>
    );
}

export default Mytable;
