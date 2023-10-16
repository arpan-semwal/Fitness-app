import {  Typography,Button, Box } from "@mui/material";
import HeroBannnerImage from "../assets/images/banner.png";
import "../App.css"; // Import your CSS file


const Herobanner = () => {
  return (

    <div className="container">
        <div className="text">
       <Box
      sx={{
        width: 300,
        height: 300,
        mt:{lg:'160px' , xs:'70px' , ml:{sm:'60px'}},
       
        
      }} position="relative" 
      p="20px"
    >
       <Typography color="#FF2625" fontWeight="600" fontSize="26px">
         Fitness Club
        </Typography>

        <Typography  fontWeight="700" 
      sx={{fontSize:{lg:'44px' , xs:'40px'}}}
      mb="23px" mt="30px"
        >
          Sweat , Smile <br/> and repeat
       </Typography>

        <Typography  fontSize="22px" lineHeight="35px" mb={3}>
          Checkout the most effective excercise for a person
       </Typography>

        <Button variant="contained" color="success" href="#excercise" >Explore Success</Button>
        
      
       
       </Box>
    </div>

    <div className="image">
    <img src={HeroBannnerImage} className="herobanner-img"/>
    </div>
    </div>


  

   
  );
}

export default Herobanner;
