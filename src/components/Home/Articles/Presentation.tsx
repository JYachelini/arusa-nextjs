import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { IArticle } from '../../../interfaces/article.interface';

function ArticlesPresentation({
  id,
  title,
  description,
  imageUrl
}: IArticle): React.ReactElement {
  return (
    <Container disableGutters>
      <Box
        sx={{
          padding: '1rem',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'oyster.main'
        }}
      >
        <Typography sx={{ typography: 'h4', color: 'stormy.main' }}>
          Enjoy our articles
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            mobile: 'column',
            laptop: 'row-reverse'
          }
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          sx={{
            width: { mobile: 'auto', laptop: '50%' },
            padding: { mobile: '1rem', laptop: '1.5rem' },
            paddingRight: { laptop: '.5rem' }
          }}
        />
        <Box
          sx={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.2rem',
            paddingTop: '1rem',
            padding: { mobile: '1rem', laptop: '1.5rem' },
            width: { laptop: '50%' }
          }}
        >
          <Typography
            sx={{
              typography: { mobile: 'h5', laptop: 'h4', desktop: 'h3' },
              color: 'stormy.main'
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ typography: 'regular', color: 'opal.main' }}>
            {description}
          </Typography>
          <Button
            sx={{
              paddingX: '0',
              width: 'fit-content',
              typography: 'small',
              color: 'stormy.main'
            }}
            variant="teritary"
          >
            Read article
          </Button>
        </Box>
        <Typography
          sx={{
            typography: 'h5',
            textTransform: 'uppercase',
            transform: 'rotate(180deg)',
            writingMode: 'vertical-rl',
            textAlign: 'left',
            borderLeft: '1px solid',
            borderColor: 'oyster.main',
            padding: '1rem',
            color: 'stormy.main',
            display: { mobile: 'none', laptop: 'block' }
          }}
        >
          Reader stores
        </Typography>
      </Box>
      <Box
        sx={{
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'oyster.main'
        }}
      >
        <Button
          variant="teritary"
          sx={{ typography: 'small', padding: '2rem', width: '100%' }}
        >
          See all articles
        </Button>
      </Box>
    </Container>
  );
}

export default ArticlesPresentation;
