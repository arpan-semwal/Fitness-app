import { Box, Typography, Button } from "@mui/material";
import HeroBannnerImage from "../assets/images/banner.png";
import "../App.css"; // Import your CSS file

const Herobanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        display: "flex", // Add a display property to make the text and image side by side
        alignItems: "center", // Center text vertically
      }}
      position="relative"
      p="20px"
    >
      <div>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
          Sweat, Smile, <br /> and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight="40px">
          Check out the most effective websites
        </Typography>

        <Button variant="contained" href="#exercises" color="error">
          Explore Exercise
        </Button>
      </div>

      <img src={HeroBannnerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default Herobanner;
