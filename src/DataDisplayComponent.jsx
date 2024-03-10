import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Card,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemText,
    Tabs,
    Tab,
    Box,
    Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const DataDisplayComponents = () => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <h2>Affichage des données</h2>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Exemple de carte
                    </Typography>
                    <Typography color="textSecondary">Sous-titre</Typography>
                </CardContent>
            </Card>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Contenu détaillé de l'Accordion 1.</Typography>
                </AccordionDetails>
            </Accordion>

            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Élément de liste 1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Élément de liste 2" />
                </ListItem>
            </List>

            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Onglet 1" />
                    <Tab label="Onglet 2" />
                </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
                Contenu de l'Onglet 1
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                Contenu de l'Onglet 2
            </TabPanel>

            <Tooltip title="Informations supplémentaires ici">
                <Typography>Survolez-moi pour voir le tooltip.</Typography>
            </Tooltip>
        </div>
    );
};

export default DataDisplayComponents;
