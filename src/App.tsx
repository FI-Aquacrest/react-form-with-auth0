import React from 'react';
import { Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import TopBar from './layout/TopBar';
import ContentField from './layout/ContentField';
import UserForm from './views/UserForm';
import BottomFooter from './layout/BottomFooter';

function App() {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: 'lightgray', height: '100vh' }}>
      <Container maxWidth="sm" disableGutters>
        <Paper>
          <Box sx={{ height: mobileView ? '95vh' : '85vh' }}>
            <TopBar />
            <ContentField>
              <UserForm />
            </ContentField>
          </Box>
          <Box sx={{ height: '5vh' }}>
            <BottomFooter />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
