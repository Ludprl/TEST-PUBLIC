import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import CustomTable from "./CustomTable";
import theme from "./theme"; // Assurez-vous d'importer le chemin correct
import { Container } from "@mui/material";

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
            </ThemeProvider>
        </Container>
    );
}

export default Mytable;
