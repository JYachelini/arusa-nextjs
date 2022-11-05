import { createSlice } from '@reduxjs/toolkit';
import { IHome } from '../../../interfaces/home.interface';
import ImagesLookBook from '../../../components/Home/Lookbook/importImages';
import ImagesFeaturesProducts from '../../../components/Home/FeatureProducts/importImages';
import ImagesArticles from '../../../components/Home/Articles/importImages';

const [
  FirstProduct,
  LookBook2Product1,
  LookBook2Product2,
  LookBook2Product3,
  FeatureProduct1,
  FeatureProduct2,
  FeatureProduct3,
  FeatureProduct4,
  FeatureProduct5,
  FeatureProduct6,
  FeatureProduct7,
  FeatureProduct8
] = ImagesLookBook;

const [Image1, Image2, Image3, Image4] = ImagesFeaturesProducts;

const [Article1, Article2, Article3, Presentation] = ImagesArticles;

const initialState: IHome = {
  featureProducts: [
    {
      id: 1,
      title: 'Native Iron Chair',
      price: 4990,
      imageUrl: Image1,
      sizeX: 1,
      sizeY: 1
    },
    {
      id: 2,
      title: 'Century Dashe',
      price: 1799,
      imageUrl: Image2,
      sizeX: 1,
      sizeY: 1
    },
    {
      id: 3,
      title: 'Native Light Chair',
      price: 4990,
      imageUrl: Image3,
      sizeX: 1,
      sizeY: 1
    },
    {
      id: 4,
      title: 'Paola Wood Lamp',
      price: 5990,
      imageUrl: Image4,
      sizeX: 1,
      sizeY: 1
    }
  ],
  lookBook: {
    featureProducts: [
      {
        id: 1,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct1,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 2,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct2,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 3,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct3,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 4,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct4,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 5,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct5,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 6,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct6,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 7,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct7,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 8,
        title: 'Naitve iron chair',
        price: 4990,
        imageUrl: FeatureProduct8,
        sizeX: 1,
        sizeY: 1
      }
    ],
    firstProduct: {
      id: 1,
      title: 'Native light chair',
      description:
        'Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, your days as a host will be marked by a lot of elegance and sophistication.',
      imageUrl: FirstProduct,
      price: 100,
      sizeX: 1,
      sizeY: 1
    },
    presentationProduct: {
      id: 1,
      title: 'fake',
      price: 100,
      materials: ['Ceramic', 'Glass', 'Iron', 'Wood'],
      producedIn: ['Canada', 'Italy', 'United States'],
      categories: ['Decoration', 'Lamp', 'Furniture'],
      imageUrl: LookBook2Product3,
      sizeX: 1,
      sizeY: 1
    },
    products: [
      {
        id: 1,
        title: 'Iglenix Vase',
        imageUrl: LookBook2Product1,
        price: 2299,
        sizeX: 1,
        sizeY: 1
      },
      {
        id: 2,
        title: 'Atajux Lamp',
        imageUrl: LookBook2Product2,
        price: 2399,
        sizeX: 1,
        sizeY: 1
      }
    ]
  },
  articles: {
    articlePresentation: {
      id: 1,
      title: 'Manhattan Pià-terre for a new Chicago apartment',
      description:
        'Interior designer Sarah Vaile remembers eyeing a New York City apartment—one with bold colors and a personality as distinct as its chic owner—in a 2014 issue of House Beautiful, and tucking it away for future design inspiration. Years later, in a serendipitous turn of events, the woman she’d seen in the magazine—a stylish figure now in her 30s—just moved to Chicago.',
      imageUrl: Presentation
    },
    articlesHome: [
      {
        id: 1,
        title: "Inside a playful, bohemian beach house on Martha's Vineyard",
        description:
          'I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.',
        imageUrl: Article1
      },
      {
        id: 2,
        title: 'Modern Texas home is beautiful and completely kid-friendly',
        description:
          'I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.',
        imageUrl: Article2
      },
      {
        id: 3,
        title: "Tudor-style home in Chicago's North Shore is chock-full",
        description:
          'I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.',
        imageUrl: Article3
      }
    ]
  }
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {}
});

// export const {} = homeSlice.actions;

export default homeSlice.reducer;
