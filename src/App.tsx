import React from 'react';
import { Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import TopBar from './layout/TopBar';
import ContentField from './layout/ContentField';
import UserForm from './views/UserForm';

function App() {
  return (
    <Box sx={{ bgcolor: 'lightgray', height: '100vh' }}>
      <Container maxWidth="sm" disableGutters>
        <Paper sx={{ minHeight: '90vh' }}>
          <TopBar />
          <ContentField>
            <UserForm />
          </ContentField>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
