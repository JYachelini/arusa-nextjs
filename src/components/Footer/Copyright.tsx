import { Typography } from '@mui/material';
import React from 'react';

function Copyright({ text }: { text: string }): React.ReactElement {
  return <Typography variant="small">{text}</Typography>;
}

export default Copyright;
