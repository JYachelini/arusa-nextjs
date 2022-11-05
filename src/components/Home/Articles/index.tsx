import React from 'react';
import { Container } from '@mui/material';
import { IArticles } from '../../../interfaces/home.interface';
import ArticlesPresentation from './Presentation';
import ArticleView from './View';

function Articles({ articles }: { articles: IArticles }): React.ReactElement {
  const { articlePresentation, articlesHome } = articles;
  return (
    <Container disableGutters>
      <ArticlesPresentation {...articlePresentation} />
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', laptop: 'row' },
          borderBottom: '1px solid',
          borderColor: 'oyster.main'
        }}
      >
        {articlesHome.map((article) => {
          return <ArticleView {...article} key={article.id} />;
        })}
      </Container>
    </Container>
  );
}

export default Articles;
