import { Box, Typography, Button } from "@mui/material";
import HeroBannnerImage from "../assets/images/banner.png";
import "../App.css"; // Import your CSS file

const Herobanner = () => {
  return (
    <div className="banner">
      <div className="left">
        <Box
          sx={{
            mt: { lg: "160px", xs: "80px" },
            ml: { sm: "60px" },
          }}
          position="relative"
          p="20px"
        >
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
        </Box>
      </div>

      <div className="right">
        <img
          src={HeroBannnerImage}
          alt="banner"
          className="image1"
        />
      </div>
    </div>
  );
};

export default Herobanner;
