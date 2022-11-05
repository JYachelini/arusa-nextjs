import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

import { IProduct } from '../../../interfaces/product.interface';
function FirstProduct({ product }: { product: IProduct }): React.ReactElement {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: { mobile: 'column', tablet: 'row-reverse' },
        gap: { mobile: '56px', tablet: '0' },
        padding: { mobile: '16px', tablet: '0' }
      }}
    >
      <Box sx={{ width: { tablet: '50%' } }}>
        <Box
          component="img"
          src={product.imageUrl}
          alt={product.title}
          sx={{ width: '100%', height: '100%' }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: { tablet: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '48px',
            width: { tablet: '400px' },
            textAlign: 'left',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h4" color="white.main">
            {product.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '24px',
              flexDirection: { mobile: 'column' }
            }}
          >
            <Typography sx={{ typography: 'regular', color: 'oyster.main' }}>
              {product.description}
            </Typography>
            <Typography>
              <Button
                variant="teritary"
                sx={{
                  typography: 'small',
                  color: 'white.main',
                  paddingX: '0',
                  '&:after': { borderColor: 'white.main' }
                }}
              >
                View product
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default FirstProduct;
