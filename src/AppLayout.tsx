import React from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery, Box, Container, Paper, useTheme } from '@mui/material';
import BottomFooter from './layout/BottomFooter';
import TopBar from './layout/TopBar';
import ContentField from './layout/ContentField';

function AppLayout() {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: 'lightgray', height: '100vh' }}>
      <Container maxWidth="sm" disableGutters>
        <Paper>
          <Box sx={{ height: mobileView ? '95vh' : '85vh' }}>
            <TopBar />
            <ContentField>
              <Outlet />
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

export default AppLayout;
