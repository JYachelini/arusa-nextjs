import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

import { IProduct } from '../../../interfaces/product.interface';
import { toPrice } from '../../../common/toPrice';

type TextColor = 'cloudy.main' | 'stormy.main';

function ProductView({
  product,
  textColor = 'stormy.main'
}: {
  product: IProduct;
  textColor?: TextColor;
}): React.ReactElement {
  const { imageUrl, price, title } = product;
  return (
    <Grid
      item
      sx={{
        color: 'oyster.main',
        textTransform: 'uppercase',
        display: { mobile: 'flex', tablet: 'block' },
        flexDirection: { mobile: 'column', tablet: 'row' },
        textAlign: 'left',
        padding: '8px',
        gap: '8px',
        '&:nth-of-type(odd)': {
          borderRight: { mobile: '1px solid', tablet: 'none' }
        },
        '&:nth-last-of-type(-n+2)': {
          borderTop: { mobile: '1px solid', tablet: 'none' }
        },
        cursor: 'pointer'
      }}
      mobile={6}
      tablet={3}
    >
      <img src={imageUrl} alt={title} style={{ width: '100%' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '24px',
          flexDirection: { mobile: 'column', tablet: 'row' }
        }}
      >
        <Typography variant="small" color={textColor}>
          {title}
        </Typography>
        <Typography variant="small" color={textColor}>
          ${toPrice(price)}
        </Typography>
      </Box>
    </Grid>
  );
}

export default ProductView;
