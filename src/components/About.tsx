import { CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AboutUsText } from "../utility/longTexts";
import Grid from "@mui/material/Grid";

// Import images
import Light1 from "../assets/Light1.jpg";
import Light2 from "../assets/Light2.jpg";
import Light3 from "../assets/Light3.jpg";
import { clients } from '../utility/clients';

const images = [Light1, Light2, Light3];

const About: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Header Section */}
            <Card sx={{ padding: "10%", backgroundColor: "#2c3033", color: "white" }}>
                <CardContent>
                    <Typography variant="h1">
                        We are Diamond Lighting
                    </Typography>
                </CardContent>
            </Card>

            {/* Side-by-Side Layout for Image and About Text */}
            <Card sx={{ padding: "5%" }}>
                <CardContent>
                    <Grid container spacing={4} alignItems="center">
                        {/* Left Side - Image Transition */}
                        <Grid item xs={12} md={3} >
                            {/* <motion.img
                                key={index}
                                src={images[index]}
                                alt="Chandelier"
                                className="max-w-full"
                                style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            /> */}
                            <Typography variant='h1'>Our Story</Typography>
                        </Grid>

                        {/* Right Side - About Text */}
                        <Grid item xs={12} md={9}>
                            <Typography variant="body1" sx={{ fontSize: "100%", whiteSpace: "pre-line", paddingBottom: "3%" }}>
                                {AboutUsText}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Brands We Work With Section */}
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

            <Card sx={{ padding: "5%" }}>
    <CardContent>
        <Grid container justifyContent="space-between">
            {/* Left Side - Title */}
            <Grid item xs={12} sm={6}>
                <Typography variant="h2">
                    Get in touch
                </Typography>
            </Grid>

            {/* Right Side - Contact Info */}
            <Grid item xs={12} sm={6} textAlign="left">
                <Typography variant="h4">
                    info@diamond-lighting.com
                </Typography>
                <Typography variant="h4">
                (561) 997-6707
                </Typography>
            </Grid>
        </Grid>
    </CardContent>
</Card>



        </div>
    );
};

export default About;
