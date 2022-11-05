import React from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  TextField
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Image from '../../../assets/images/Home/ContactUs/ContactUs.png';
import ImageMobile from '../../../assets/images/Home/ContactUs/ContactUsMobile.png';

function ContactUs(): React.ReactElement {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('tablet'));
  return (
    <Container
      disableGutters
      sx={{
        padding: '2rem',
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Box
        component="img"
        src={matches ? Image : ImageMobile}
        sx={{ width: '100%' }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          gap: '2rem'
        }}
      >
        <Typography
          sx={{ typography: 'h2', color: 'cloudy.main', maxWidth: '60%' }}
        >
          Be part of our club for discount
        </Typography>
        <TextField
          label="YOUR EMAIL"
          variant="outlined"
          size="small"
          sx={{
            typography: 'small',
            width: 'fit-content',
            input: { color: 'cloudy.main' },
            color: 'cloudy.main',
            '& .MuiInputLabel-root': { color: 'cloudy.main' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'cloudy.main' },
            '& .MuiOutlinedInput-root': {
              '& > fieldset': { borderColor: 'cloudy.main' }
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              color: 'cloudy.main',
              '& > fieldset': {
                borderColor: 'cloudy.main'
              }
            },
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': {
                borderColor: 'cloudy.main'
              }
            }
          }}
        />
      </Box>
    </Container>
  );
}

export default ContactUs;
