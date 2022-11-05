import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import Images from './importImages';

function Details(): React.ReactElement {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('laptop'));
  const detailPresentation = {
    title: 'Every detail matter',
    subtitle:
      'WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY ENVIRONMENT.',
    description:
      'There are multiples of high quality pieces, with styles that transition from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings and many gifts to compose great projects. In order selection, a mix of basic style, stricter customization and more compact dimensions, composing sophisticated and exclusive environments.'
  };
  const [
    DetailPresentation1,
    DetailPresentation2,
    DetailPresentation3,
    DetailPresentation4,
    DetailPresentation4Mobile,
    DetailPresentation5
  ] = Images;

  return (
    <Container disableGutters>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'oyster.main',
          position: 'relative',
          color: 'stormy.main',
          '&:after': {
            content: '""',
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: 'calc(100%-12px)',
            height: { laptop: '105%' },
            borderLeft: '1px solid',
            borderColor: 'oyster.main',
            marginLeft: '3.75rem'
          }
        }}
      >
        <Box
          sx={{
            color: 'stormy.main',
            paddingX: '1rem',
            paddingY: '3.5rem',
            paddingTop: '6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: { laptop: '50%' },
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography sx={{ typography: { mobile: 'h4', laptop: 'h2' } }}>
            {detailPresentation.title}
          </Typography>
          <Typography sx={{ typography: 'small', textTransform: 'uppercase' }}>
            {detailPresentation.subtitle}
          </Typography>
          <Typography sx={{ typography: 'regular', maxWidth: '70%' }}>
            {detailPresentation.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', laptop: 'row' },
          // padding: { laptop: '1rem' },
          gap: { laptop: '.5rem' }
        }}
      >
        <Typography
          sx={{
            typography: 'h5',
            display: {
              mobile: 'none',
              laptop: 'block'
            },
            transform: 'rotate(180deg)',
            writingMode: 'vertical-rl',
            textTransform: 'uppercase',
            textAlign: 'left',
            paddingTop: '2rem',
            borderLeft: '1px solid',
            borderColor: 'oyster.main',
            padding: '1rem'
          }}
        >
          Details
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: { mobile: '100%', laptop: '70%' },
            paddingY: { laptop: '1rem' },
            paddingX: { laptop: '0' }
          }}
        >
          <Box component="img" src={DetailPresentation1} width="100%" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: { mobile: '100%', laptop: '30%' },
            gap: '.5rem',
            flexDirection: { laptop: 'column' },
            borderLeft: { laptop: '1px solid' },
            borderColor: { laptop: 'oyster.main' },
            padding: { laptop: '1rem' },
            paddingLeft: { laptop: '.5rem' }
          }}
        >
          <Box
            component="img"
            src={DetailPresentation2}
            width="100%"
            sx={{ padding: { mobile: '.5rem 0 .5rem .5rem', laptop: '0' } }}
          />
          <Box
            component="img"
            src={DetailPresentation3}
            width="100%"
            sx={{ padding: { mobile: '.5rem .5rem .5rem 0', laptop: '0' } }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          component="img"
          src={matches ? DetailPresentation4 : DetailPresentation4Mobile}
          sx={{ width: '100%' }}
        ></Box>
        <Box
          component="img"
          src={DetailPresentation5}
          sx={{
            display: { mobile: 'none', laptop: 'block' },
            position: 'absolute',
            width: '30%'
            // top: '50%',
            // bottom: '50%',
            // transform: 'translate(50%,-50%)',
          }}
        ></Box>
      </Box>
    </Container>
  );
}

export default Details;
