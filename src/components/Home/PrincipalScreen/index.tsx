import { Container, Typography, Button } from '@mui/material';
import React from 'react';
import HomeImage from '../../../assets/images/Home/PrincipalScreen.png';

function PrincipalScreen(): React.ReactElement {
  return (
    <Container
      disableGutters
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container
        disableGutters
        sx={{
          width: {
            mobile: '18.75rem',
            tablet: '31.25rem',
            laptop: '35rem',
            desktop: '46.563rem'
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem'
        }}
      >
        <Typography
          sx={{
            typography: {
              mobile: 'h4',
              tablet: 'h3',
              laptop: 'h2',
              desktop: 'h1'
            },
            color: 'white.main',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
          component="span"
        >
          Seamless
          <Typography
            sx={{
              typography: {
                mobile: 'h4',
                tablet: 'h3',
                laptop: 'h2',
                desktop: 'h1'
              },
              color: 'white.main',
              paddingLeft: '0.625rem',
              fontStyle: 'italic'
            }}
            component="span"
          >
            furniture
          </Typography>
          with natural fabrics
        </Typography>
        <Button variant="primary" sx={{ width: '137px' }}>
          <Typography variant="small">SHOP ALL</Typography>
        </Button>
      </Container>
    </Container>
  );
}

export default PrincipalScreen;
