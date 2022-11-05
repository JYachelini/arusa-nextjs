import { Container, Typography, Button, Grid } from '@mui/material';
import React from 'react';
import { IProduct } from '../../../interfaces/product.interface';
import ProductView from './View';

function FeatureProducts({
  products
}: {
  products: IProduct[];
}): React.ReactElement {
  return (
    <Container disableGutters sx={{ paddingBottom: { tablet: '22px' } }}>
      <Typography
        variant="h4"
        sx={{
          color: 'stormy.main',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          paddingY: '24px',
          borderColor: 'oyster.main'
        }}
      >
        Enjoy our feature products
      </Typography>
      <Grid container>
        {products.map((product) => {
          return <ProductView key={product.id} product={product} />;
        })}
      </Grid>
      <Button
        variant="teritary"
        sx={{
          paddingY: '24px',
          color: 'stormy.main',
          width: '100%',
          borderBottom: '1px solid',
          borderTop: '1px solid',
          borderColor: 'oyster.main'
        }}
      >
        <Typography variant="small">Shop all</Typography>
      </Button>
    </Container>
  );
}

export default FeatureProducts;
