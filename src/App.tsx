import React from 'react';
import { Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import TopBar from './layout/TopBar';

function App() {
  return (
    <Box sx={{ bgcolor: 'lightgray', height: '100vh' }}>
      <Container maxWidth="lg" disableGutters>
        <Paper>
          <TopBar />
          <Box sx={{ width: '100%', height: '20vh' }} />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
