import React from 'react';
import { Box, Typography } from '@mui/material';

const BottomFooter = () => {
  return (
    <Box component="footer" sx={{ position: 'static', width: '100%' }}>
      <Typography textAlign="center">
        {'©Sami Pitkänen 2023'}
      </Typography>
    </Box>
  );
};

export default BottomFooter;
