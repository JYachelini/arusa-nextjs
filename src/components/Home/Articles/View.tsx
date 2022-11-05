import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { IArticle } from '../../../interfaces/article.interface';

function ArticleView(article: IArticle): React.ReactElement {
  return (
    <Box
      sx={{
        padding: '1rem',
        paddingTop: { mobile: '.5rem', laptop: '1rem' },
        paddingBottom: { laptop: '4rem' },
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        '&:nth-of-type(-n+2)': {
          borderRight: '1px solid',
          borderColor: 'oyster.main'
        }
      }}
    >
      <Box component="img" src={article.imageUrl} sx={{ width: '100%' }}></Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <Typography sx={{ typography: 'h5', color: 'stormy.main' }}>
          {article.title}
        </Typography>
        <Typography sx={{ typography: 'regular', color: 'opal.main' }}>
          {article.description}
        </Typography>
        <Button
          sx={{
            typography: 'small',
            color: 'stormy.main',
            width: 'fit-content',
            paddingX: '0'
          }}
        >
          Read article
        </Button>
      </Box>
    </Box>
  );
}

export default ArticleView;
