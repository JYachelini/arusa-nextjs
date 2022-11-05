import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ItemsBag from './ItemsBag';
import { toPrice } from '../../../common/toPrice';
import { ICart } from '../../../interfaces/cart.interface';

function Bag({
  toggleDrawer,
  cart
}: {
  toggleDrawer: () => (event: React.KeyboardEvent | React.MouseEvent) => void;
  cart: ICart;
}): React.ReactElement {
  const { products, totalPrice } = cart;
  return (
    <>
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          margin: 0,
          paddingX: { mobile: '3rem', laptop: '5rem' },
          paddingBottom: { mobile: '64px', laptop: '52px' }
        }}
      >
        {cart.products.length > 0 ? (
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                paddingTop: { mobile: '1rem', laptop: '1.5rem' },
                gap: { mobile: '1rem', laptop: '2rem' },
                marginLeft: { mobile: '1rem', laptop: '0' },
                maxHeight: { mobile: '70%', laptop: '80%' }
              }}
            >
              <Typography
                sx={{
                  typography: 'large',
                  textTransform: 'uppercase',
                  color: 'stormy.main',
                  paddingTop: { mobile: '2rem', laptop: '1.5rem' },
                  textAlign: 'center',
                  alignSelf: 'center'
                }}
              >
                Order Summary
              </Typography>
              {products.map((product) => {
                return (
                  <Box
                    key={product.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '.5rem',
                      width: '100%',
                      maxHeight: '20%'
                    }}
                  >
                    <ItemsBag product={product} />
                  </Box>
                );
              })}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingY: '.5rem',
                  borderTop: '1px solid',
                  borderBottom: '1px solid',
                  borderColor: 'oyster.main'
                }}
              >
                <Typography
                  sx={{
                    typography: 'small',
                    color: 'stormy.main',
                    textTransform: 'uppercase'
                  }}
                >
                  Grand total incl. tax
                </Typography>
                <Typography>${toPrice(totalPrice)}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { mobile: 'column', laptop: 'row' },
                  justifyContent: 'center',
                  gap: '.5rem'
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ width: '100%', typography: 'small', padding: '1rem' }}
                  onClick={toggleDrawer()}
                >
                  Continue shopping
                </Button>
                <Button
                  variant="secondary"
                  sx={{ width: '100%', typography: 'small', padding: '1rem' }}
                >
                  Proceed to checkout
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <Typography sx={{ typography: 'h3', margin: 'auto' }}>
            Cart empty.
            <Typography sx={{ typography: 'large', textAlign: 'center' }}>
              Try adding products.
            </Typography>
          </Typography>
        )}
      </Container>
    </>
  );
}

export default Bag;
