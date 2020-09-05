import React from 'react';
import { Box, Typography } from '@material-ui/core';

const About = () => {
  return (
    <Box m="30px" textAlign="center" color="warning.main">
      <Typography variant="h3" component="p">
       Now, this is a mini social media site. One day it will be the Top Social Site <span>😀</span>
      </Typography>
    </Box>
  );
};

export default About;
