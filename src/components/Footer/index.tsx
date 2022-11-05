'use client';

import { Box, Grid, Container } from '@mui/material';
import React from 'react';
import Footer_Header from './Header';
import Copyright from './Copyright';
import { ArusaLogo } from '../../common/arusaLogo';
import { useCustomSelector } from '../../hooks/redux';

function Footer(): React.ReactElement {
  const { footer } = useCustomSelector((state) => state);
  const { header, copyright } = footer;

  return (
    <Box
      component={'footer'}
      sx={{
        bgcolor: 'opal.main',
        color: 'cloudy.main',
        paddingTop: { mobile: '3.563rem', tablet: '0px' },
        paddingBottom: { mobile: '3.5rem', tablet: '1.375rem' }
      }}
    >
      <Grid
        container
        sx={{
          textAling: 'left',
          borderTop: '1px solid',
          borderBottom: '1px solid'
        }}
      >
        {header.map((item) => {
          return <Footer_Header item={item} key={item.id} />;
        })}
      </Grid>
      <Container sx={{ marginY: { mobile: '2.188rem', tablet: '5.625rem' } }}>
        <ArusaLogo color={true} />
      </Container>
      <Container
        sx={{
          paddingY: '1.5rem',
          borderTop: '1px solid',
          borderBottom: '1px solid'
        }}
      >
        <Copyright text={copyright} />
      </Container>
    </Box>
  );
}

export default Footer;
