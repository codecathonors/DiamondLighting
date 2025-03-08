import React from "react";
import { Container, Grid, Typography, Link, Divider, Box } from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#1a1a1a", color: "white", padding: "40px 0" }}>
            <Container maxWidth="lg">
                <Grid container alignItems="flex-start">
                    {/* Left Section - Contact Info */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1, opacity: 0.7 }}>
                            2901 Clint Moore Road #219
                            <br />
                            Boca Raton, Florida 33496
                        </Typography>
                        <Typography variant="body2">
                            email@email.com
                            <br />
                            555-555-5555
                        </Typography>
                    </Grid>

                    {/* Center Section - Navigation Links */}
                    <Grid item xs={12} sm={6} md={9}>
                        <Box display="inline-block" alignItems="center">
                            <Link href="/about" color="inherit" underline="none" variant="h6">
                                About Us
                            </Link>
                            <Link href="/products" color="inherit" underline="none" variant="h6">
                                Products
                            </Link>
                            <Link href="/projects" color="inherit" underline="none" variant="h6">
                                Projects
                            </Link>
                            <Link href="/clients" color="inherit" underline="none" variant="h6">
                                Clients
                            </Link>
                            <Link href="/photometric-design" color="inherit" underline="none" variant="h6">
                                Photometric Design
                            </Link>
                        </Box>
                    </Grid>
                    </Grid>

                    {/* Right Section - Social Icons at Bottom */}
                        <Box>
                            <Link href="https://facebook.com" color="inherit" sx={{ marginRight: 2 }}>
                                <Facebook fontSize="large" />
                            </Link>
                            <Link href="https://linkedin.com" color="inherit">
                                <LinkedIn fontSize="large" />
                            </Link>
                        </Box>
              

                {/* Divider and Copyright */}
                <Divider sx={{ backgroundColor: "white", opacity: 0.2, marginTop: "30px" }} />
                <Typography variant="body2" sx={{ textAlign: "center", marginTop: "20px", opacity: 0.6 }}>
                    © {new Date().getFullYear()} Diamond Lighting. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
