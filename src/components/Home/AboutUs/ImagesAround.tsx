import React from 'react';
import { Box, Container } from '@mui/material';

import Images from './importImages';
function ImagesAround(): React.ReactElement {
  const [Image1, Image2, Image3, Image4, Image5, Image6] = Images;
  return (
    <Container disableGutters>
      <Box
        sx={{
          width: { mobile: '9.188rem', tablet: '250px', laptop: '332px' },
          position: 'absolute',
          top: { mobile: '41px', tablet: '30px' },
          left: { mobile: '32px', tablet: '50%' },
          right: { tablet: '50%' },
          transform: { tablet: 'translate(-50%)' }
        }}
      >
        <Box component="img" src={Image1} sx={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          width: { mobile: '76px', tablet: '120px', desktop: '172px' },
          position: 'absolute',
          top: { mobile: '126px', tablet: '262px' },
          right: { mobile: '7px', tablet: '50px', laptop: '200px' }
        }}
      >
        <Box component="img" src={Image2} sx={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          width: { mobile: '88px', tablet: '140px', laptop: '200px' },
          position: 'absolute',
          top: { mobile: '222px', tablet: '451px' },
          right: { mobile: '-60px', tablet: '-100px', laptop: '0' }
        }}
      >
        <Box component="img" src={Image3} sx={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          width: { mobile: '156px', tablet: '230px', laptop: '350px' },
          position: 'absolute',
          bottom: { mobile: '54px', tablet: '109px' },
          right: {
            mobile: '-30px',
            tablet: '50px',
            laptop: '40px',
            desktop: '198px'
          }
        }}
      >
        <Box component="img" src={Image4} sx={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          width: { mobile: '182px', laptop: '250px', desktop: '350px' },
          position: 'absolute',
          bottom: { mobile: '116px', tablet: '291px' },
          left: { mobile: '-125px', tablet: '0px' }
        }}
      >
        <Box component="img" src={Image5} sx={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          width: { mobile: '102px', tablet: '130px', laptop: '231px' },
          position: 'absolute',
          top: { mobile: '238px', tablet: '211px' },
          left: { mobile: '-70px', tablet: '38px' }
        }}
      >
        <Box component="img" src={Image6} sx={{ width: '100%' }} />
      </Box>
    </Container>
  );
}

export default ImagesAround;
