import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, Card, CardMedia } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation links
  const navItems = [
    { label: "Products", path: "/products" },
    { label: "About", path: "/about-us" },
    { label: "Contact", path: "/contact" },
    { label: "Portfolio", path: "/portfolio" },
  ];

  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "15px", paddingBottom: "15px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 7 }}>
          {/* Logo */}
          <Card sx={{ maxWidth: 300, boxShadow: "none", cursor: "pointer" }} onClick={() => window.location.href = "/home"}>
            <CardMedia component="img" image="logoCropped.jpg" alt="Company Logo" />
          </Card>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 8 }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                variant="h6"
                sx={{
                  display: "inline-block",
                  letterSpacing: ".75px",
                  position: "relative",
                  paddingBottom: "5px",
                  "&:hover::after": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                    transition: "transform 0.4s ease-out",
                  },
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    transform: "scaleX(0)",
                    transformOrigin: "bottom right",
                    transition: "transform 0.25s ease-out",
                  },
                }}
              >
                <a href={item.path} style={{ textDecoration: "none", color: "inherit" }}>
                  {item.label}
                </a>
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton color="inherit" edge="end" sx={{ display: { md: "none" } }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Full-Screen Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%", 
            height: "100%", 
            zIndex: 1300,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            How can we help?
          </Typography>
        </Box>

        {/* Navigation Links */}
        <List sx={{ paddingTop: "20px" }}>
        {navItems.map((item) => (
            <ListItem
                key={item.label}
                component="a"
                href={item.path}
                onClick={handleDrawerToggle}
                sx={{
                display: "flex", // Make ListItem a flex container
                justifyContent: "center", // Center the content horizontally
                width: "100%", // Ensure it spans the full width
                }}
            >
                <Typography
                variant="h1" // This makes it an h1 element
                sx={{
                    fontSize: "3rem", // Adjust font size as needed
                    textAlign: "center", // Center the text inside Typography
                    position: "relative", // Required for absolute positioning of the underline
                    display: "inline-block", // Makes the underline only span the width of the text
                    color: "black", // Set text color to black
                    textDecoration: "none", // Ensure there is no underline by default
                    "&:hover::after": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%", // Underline the entire width of the text
                    height: "2px",
                    backgroundColor: "black", // Underline color
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                    transition: "transform 0.4s ease-out",
                    },
                    "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%", // Initially the underline is not visible
                    height: "2px",
                    backgroundColor: "black", // Underline color
                    transform: "scaleX(0)",
                    transformOrigin: "bottom right",
                    transition: "transform 0.25s ease-out",
                    },
                    "& a": {
                    textDecoration: "none", // Remove any underline from anchor tag itself
                    color: "black", // Ensure anchor text is black
                    },
                }}
                >
                {item.label}
                </Typography>
            </ListItem>
            ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
