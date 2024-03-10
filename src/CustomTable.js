import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import Chip from "@mui/material/Chip";

const handleDelete = () => {
    console.log("coucouc");
};

const CustomTable = ({ data }) => {
    const [filter, setFilter] = useState("Paris");
    const columns = Object.keys(data[0]).filter((key) => key !== "moyendetransport");

    const formatNumber = (number) => {
        const num = Number(number); // Assurer la conversion en nombre, au cas où l'entrée est une chaîne
        if (num >= 1e6) {
            // Pour les nombres >= 1 million
            return (num / 1e6).toFixed(3) + " M";
        } else if (num >= 1e5) {
            // Pour les nombres >= 10 000 et < 1 million
            return (num / 1e3).toFixed(1) + " K";
        } else {
            // Pour les nombres < 10 000, formatage standard avec des espaces pour milliers
            return new Intl.NumberFormat("fr-FR").format(num);
        }
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Moyen de transport <br />
                                {filter && (
                                    <span
                                        style={{
                                            color: "orange",
                                            fontSize: "0.7rem",
                                        }}
                                    >
                                        Filtre : {filter}
                                    </span>
                                )}
                            </TableCell>
                            {columns.map((year) => (
                                <TableCell align="right" key={year}>
                                    {year}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.moyendetransport}>
                                <TableCell component="th" scope="row">
                                    {row.moyendetransport}
                                </TableCell>
                                {columns.map((year) => (
                                    <TableCell align="right" key={year}>
                                        {formatNumber(row[year])}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Chip
                    label={filter}
                    color="primary"
                    variant="filled"
                    onDelete={handleDelete}
                />
            </TableContainer>
        </>
    );
};

export default CustomTable;
