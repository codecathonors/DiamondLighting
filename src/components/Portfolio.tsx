import React from "react";
import { Card, CardMedia, CardContent, Grid, Typography} from "@mui/material";
import { clients } from "../utility/clients";

const Portfolio = () => {
    return (

       
            <Card>
                <CardContent sx={{ backgroundColor: "#2c3033" }}>
                    <Typography variant="h3" sx={{ textAlign: "center", marginBottom: "20px", color: "white", paddingTop: "5%", paddingBottom: "4%" }}>
                        Our Partners
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {clients.map((brand, idx) => (
                            <Grid item key={idx} xs={6} sm={4} md={3} lg={2}>
                                <CardMedia
                                    component="img"
                                    image={brand.logo}
                                    alt={brand.name}
                                    sx={{
                                        display: "block",
                                        filter: "grayscale(100%)",
                                        transition: "0.3s",
                                        "&:hover": { filter: "grayscale(0%)" },
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
    );
};

export default Portfolio;
