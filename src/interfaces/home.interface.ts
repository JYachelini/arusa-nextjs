import { IArticle } from './article.interface';
import { IProduct } from './product.interface';

export interface IHome {
  featureProducts: IProduct[];
  lookBook: ILookBook;
  articles: IArticles;
}

export interface ILookBook {
  firstProduct: IProduct;
  products: IProduct[];
  presentationProduct: IProduct;
  featureProducts: IProduct[];
}

export interface IArticles {
  articlePresentation: IArticle;
  articlesHome: IArticle[];
}
