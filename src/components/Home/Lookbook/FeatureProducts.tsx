import React from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import { IProduct } from '../../../interfaces/product.interface';
import ProductView from '../FeatureProducts/View';

function FeatureProducts({
  products
}: {
  products: IProduct[];
}): React.ReactElement {
  return (
    <Container disableGutters sx={{ paddingBottom: '2rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'oyster.main',
          paddingY: '1.2rem'
        }}
      >
        <Typography
          sx={{
            typography: 'h4',
            color: 'cloudy.main',
            maxWidth: { mobile: '50%', tablet: '100%' }
          }}
        >
          Enjoy our feature products
        </Typography>
      </Box>
      <Grid container>
        {products.map((product) => {
          return (
            <ProductView
              product={product}
              key={product.id}
              textColor="cloudy.main"
              borderColor="cloudy.main"
            />
          );
        })}
      </Grid>
      <Button
        variant="teritary"
        sx={{
          paddingY: '24px',
          color: 'cloudy.main',
          width: '100%',
          borderBottom: '1px solid',
          borderTop: '1px solid',
          borderColor: 'oyster.main',
          typography: 'small'
        }}
      >
        Shop all
      </Button>
    </Container>
  );
}

export default FeatureProducts;
