import { Container, Box, useMediaQuery, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LookBook2 from '../../../assets/images/Home/LookBook/LookBook2.png';
import LookBook2Mobile from '../../../assets/images/Home/LookBook/LookBook2Mobile.png';
import FirstProduct from './FirstProduct';
import ProductView from '../FeatureProducts/View';
import Presentation from './Presentation';
import FeatureProducts from './FeatureProducts';
import React from 'react';
import { ILookBook } from '../../../interfaces/home.interface';

function Lookbook(lookBook: ILookBook): React.ReactElement {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('laptop'));
  const { featureProducts, firstProduct, presentationProduct, products } =
    lookBook;

  const lookBookPresentation = {
    title: 'Lookbook',
    description:
      'The pieces stand out for their contemporary straight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive environments.'
  };

  return (
    <Container disableGutters sx={{ backgroundColor: 'opal.main' }}>
      <FirstProduct product={firstProduct} />
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        <Box
          component="img"
          src={matches ? LookBook2 : LookBook2Mobile}
          sx={{ width: '100%' }}
        />
        {products.map((product) => {
          return (
            <Paper
              key={product.id}
              sx={{
                width: { laptop: '14rem', desktop: '19rem' },
                backgroundColor: 'white.main',
                position: 'absolute',
                padding: '1rem',
                top: `${product.id === 1 ? '0' : 'auto'}`,
                bottom: `${product.id === 2 ? '5rem' : 'auto'}`,
                right: `${product.id === 2 ? '0' : 'auto'}`,
                marginY: '15rem',
                marginX: '12rem',
                display: { mobile: 'none', laptop: 'block' }
              }}
            >
              <ProductView product={product} />
            </Paper>
          );
        })}
      </Box>
      <Presentation
        title={lookBookPresentation.title}
        description={lookBookPresentation.description}
        product={presentationProduct}
      />
      <FeatureProducts products={featureProducts} />
    </Container>
  );
}

export default Lookbook;
