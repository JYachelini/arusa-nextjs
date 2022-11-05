import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { IProduct } from '../../../interfaces/product.interface';

function Presentation({
  title,
  description,
  product
}: {
  title: string;
  description: string;
  product: IProduct;
}): React.ReactElement {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', laptop: 'row' },
        marginTop: { mobile: '1rem', laptop: '0' },
        gap: { mobile: '3.5rem', laptop: '0' }
      }}
    >
      <Typography
        sx={{
          typography: 'h5',
          textTransform: 'uppercase',
          color: 'cloudy.main',
          transform: 'rotate(180deg)',
          writingMode: 'vertical-rl',
          alignSelf: 'end',
          padding: '1rem',
          display: { mobile: 'none', laptop: 'block' }
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingX: { mobile: '1.7rem', laptop: '5rem' },
          gap: { mobile: '3.5rem', laptop: '10rem' },
          width: { laptop: '60%' },
          borderLeft: { laptop: '1px solid' },
          borderColor: { laptop: 'oyster.main' }
        }}
      >
        <Typography
          sx={{
            typography: { mobile: 'h4', laptop: 'h3' },
            color: 'cloudy.main',
            paddingTop: '3rem'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            typography: 'regular',
            color: 'oyster.main',
            paddingBottom: { laptop: '15rem' }
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', laptop: 'column-reverse' },
          color: 'cloudy.main',
          borderColor: 'oyster.main',
          borderLeft: { laptop: '1px solid' },
          paddingBottom: '1.5rem',
          width: { laptop: '50%' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid',
            borderTop: '1px solid',
            borderColor: 'oyster.main',
            paddingY: '.5rem'
          }}
        >
          <Typography
            sx={{
              typography: 'small',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: '1rem',
              paddingBottom: '.5rem'
            }}
          >
            Materials:
            <Typography
              component={'span'}
              sx={{ typography: 'small', textTransform: 'uppercase' }}
            >
              {product.materials?.join(', ')}
            </Typography>
          </Typography>
          <Typography
            sx={{
              typography: 'small',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: '1rem',
              borderBottom: '1px solid',
              borderTop: '1px solid',
              borderColor: 'oyster.main',
              paddingY: '.5rem'
            }}
          >
            Produced In:
            <Typography
              component={'span'}
              sx={{ typography: 'small', textTransform: 'uppercase' }}
            >
              {product.producedIn?.join(', ')}
            </Typography>
          </Typography>
          <Typography
            sx={{
              typography: 'small',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: '1rem',
              paddingTop: '.5rem'
            }}
          >
            Categories:
            <Typography
              component={'span'}
              sx={{ typography: 'small', textTransform: 'uppercase' }}
            >
              {product.categories?.join(', ')}
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            margin: '1rem',
            padding: '1rem',
            backgroundColor: '#E0E0E0',
            height: '35rem'
          }}
        >
          <Box
            component="img"
            src={product.imageUrl}
            sx={{ maxHeight: '80%' }}
          ></Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="teritary"
              sx={{
                color: 'stormy.main',
                typography: 'small',
                textTransform: 'uppercase'
              }}
            >
              See Lookboox
            </Button>
            <Button
              variant="teritary"
              sx={{
                color: 'stormy.main',
                typography: 'small',
                textTransform: 'uppercase'
              }}
            >
              Shop all
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: { mobile: 'none', laptop: 'flex' },
            justifyContent: 'space-between',
            paddingX: '1rem',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            marginTop: '1rem',
            borderColor: 'oyster.main'
          }}
        >
          <Typography
            sx={{
              typography: 'small',
              textTransform: 'uppercase',
              color: 'oyster.main',
              paddingY: '.5rem'
            }}
          >
            Item
          </Typography>
          <Typography
            sx={{
              typography: 'small',
              textTransform: 'uppercase',
              color: 'oyster.main',
              paddingY: '.5rem'
            }}
          >
            Description
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Presentation;
