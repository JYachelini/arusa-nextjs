import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import ImagesAround from './ImagesAround';
function AboutUs(): React.ReactElement {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: { mobile: '12.5rem', tablet: '23.125rem' },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          width: { mobile: '21.438rem', tablet: '34.25rem' },
          display: 'flex',
          flexDirection: 'column',
          gap: '2.25rem'
          // zIndex: '10',
        }}
      >
        <Typography
          sx={{
            typography: { mobile: 'h4', tablet: 'h2' },
            color: 'stormy.main',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
          component="span"
        >
          Creating
          <Typography
            sx={{
              typography: { mobile: 'h4', tablet: 'h2' },
              fontStyle: 'italic',
              paddingLeft: '0.625rem'
            }}
          >
            perfect
          </Typography>
          lines and imposing presence
        </Typography>
        <Typography variant="regular">
          Developed the concept of exclusivity, a Arusa features timeless
          furniture, with natural fabrics, curved lines, plenty of mirrors and
          classic design, which can be incorporated into any decor project. The
          pieces enchant for their sobriety, to last for generations, faithful
          to the shapes of each period, with a touch of the present.
        </Typography>
      </Box>
      <Button variant="outlined" sx={{ width: '11.125rem' }}>
        Read about us
      </Button>
      <ImagesAround />
    </Container>
  );
}

export default AboutUs;
