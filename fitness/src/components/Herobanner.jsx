import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import HeroBannnerImage from '../assets/images/banner.png';
import SearchExercises from './SearchExercises';

const Herobanner = () => {
  return (
    <div className="container">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: { lg: '160px', xs: '70px', sm: '60px' },
        }}
        p="20px"
      >
        <div className="text">
          <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
          </Typography>

          <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' } }}
           mt="30px">
            Sweat, Smile <br /> and repeat
          </Typography>

          <Typography fontSize="22px" lineHeight="35px" mb={3}>
            Checkout the most effective exercise for a person
          </Typography>

          <Button variant="contained" color="success" href="#exercise">
            Explore Success
          </Button>
        </div>

        <div className="image">
          <img src={HeroBannnerImage} className="herobanner-img" />
        </div>
      </Box>
     
    </div>
     
  );
};

export default Herobanner;
