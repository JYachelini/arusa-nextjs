import React from 'react';
import { Container } from '@mui/material';
import { ArusaLogo } from '../../../common/arusaLogo';

function Center({ color = false }: { color?: boolean }): React.ReactElement {
  return (
    <Container
      disableGutters
      sx={{
        height: '50%',
        margin: 0,
        minWidth: '150px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ArusaLogo color={color} />
    </Container>
  );
}

export default Center;
