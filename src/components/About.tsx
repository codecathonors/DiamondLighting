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
import FixtureAboveBar from "../assets/FixtureAboveBar.png"
import Purple from "../assets/Purple.png"
import Purple2 from "../assets/Purple2.png"

const images = [Light1, Light2, Light3];

const About: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [hover, setHover] = useState(false);

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

            <div
      style={{
        position: "relative",  // Position for both images to overlap
        width: "100%",
        height: "400px",       // Adjust the height as needed
      }}
    >
      {/* Image 1 (on the left side) */}
      <Card
        sx={{
          position: "absolute",
          left: "0",         // Position it on the left side
          top: "0",
          width: "40%",      // You can adjust this width as needed
          height: "100%",
        }}
    
      >
        <CardMedia component="img" image={Purple} alt="Image 1" sx={{ height: "100%" }} />
      </Card>

      {/* Image 2 (on the right side) */}
      <Card
        sx={{
          position: "absolute",
          right: "0",        // Position it on the right side
          top: "0",
          width: "60%",       // You can adjust this width as needed
          height: "100%",
        }}
      >
        <CardMedia component="img" image={Purple2} alt="Image 2" sx={{ height: "100%" }} />
      </Card>
    </div>
           {/* Brands We Work With Section */}
           <Card sx={{ padding: "5%", backgroundColor: "#f5f5f5" }}>
                <CardContent>
                    <Grid container spacing={4}>
                        {/* Left Side - "Brands We Work With" Title */}
                        <Grid item xs={12} md={3}>
                            <Typography variant="h2" sx={{ textAlign: "left" }}>
                                Brands We Work With
                            </Typography>
                        </Grid>

                        {/* Right Side - Two Column Layout for Clients */}
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={4}>
                                {clients.map((client, index) => (
                                    <Grid item xs={6} key={index}>
                                        <Typography variant="h4">{client.name}</Typography>
                                        {/* Location under the Brand Name */}
                                        <Typography variant="body1" sx={{ display: "block", fontStyle: "italic", marginTop: "4px", color: "gray" }}>
                                            {client.location}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
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
