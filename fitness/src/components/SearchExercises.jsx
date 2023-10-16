import { Typography, Stack } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack
    spacing={2}
      mt="37px"
      alignContent='center'
      justifyContent='center'
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px',
          },
          textAlign: 'center', // Center the text
        }}
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
    </Stack>
  );
};

export default SearchExercises;
