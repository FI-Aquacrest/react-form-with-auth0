import React from 'react';
import { Box } from '@mui/material';

interface ContentProps {
  children?: React.ReactNode;
}

const ContentField = (props: ContentProps) => {
  return <Box sx={{ width: '100%', p: 5, pt: 10 }}>{props.children}</Box>;
};

export default ContentField;
