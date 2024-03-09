import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    margin: "20px 20px", // Ajouter une marge autour du tableau
                    width: "calc(60% - 40px)", // Ajuster la largeur du tableau
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-sizeSmall": {
                        padding: "2px 2px", // Ajuster le padding pour un rendu plus compact
                        maxWidth: "100px",
                        // Ajuster la largeur des cellules pour un rendu plus compact
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    // Ajouter des bordures pour des séparateurs verticaux
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                    "&:last-child": {
                        borderRight: "none", // Enlever la bordure de la dernière cellule
                    },
                    "&:first-child": {
                        borderLeft: "none", // Enlever la bordure de la première cellule
                        width: "auto", // Ajuster la largeur de la première cellule
                    },
                    borderBottom: "1px solid #9CA0B5", // Enlever la bordure du coin inférieur droit
                    // Changer la couleur du texte
                    color: "#222552", // Couleur plus foncée pour le texte
                    padding: "8px", // Ajuster le padding pour un rendu plus compact
                    fontFamily: "Poppins", // Changer la police du texte
                    fontSize: "0.85rem", // Ajuster la taille du texte
                    fontWeight: "300", // Rendre le texte normal
                    backgroundColor: "#FFF", // Changer la couleur de fond des en-têtes
                },
                head: {
                    // Personnaliser l'en-tête du tableau
                    backgroundColor: "#3A4160", // Changer la couleur de fond des en-têtes
                    color: "#FFF", // Couleur du texte pour les en-têtes
                    fontWeight: "600", // Rendre le texte des en-têtes gras
                    margin: "0", // Enlever la marge des en-têtes
                    padding: "8px", // Ajuster le padding pour un rendu plus compact
                },
            },
        },
        // Ajoutez ici d'autres personnalisations si nécessaire...
    },
});

export default theme;
