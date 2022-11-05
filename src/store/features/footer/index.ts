import { createSlice } from '@reduxjs/toolkit';
import { IFooter } from '../../../interfaces/footer.interface';

const initialState: IFooter = {
  copyright: '© ARUSA 2022 | AGATHA SAKOWICZ | JULIAN YACHELINI',
  header: [
    {
      id: 1,
      title: 'Store',
      content: [
        {
          id: 1,
          text: 'Home',
          href: ''
        },
        {
          id: 2,
          text: 'About',
          href: ''
        },
        {
          id: 3,
          text: 'Journal',
          href: ''
        },
        {
          id: 4,
          text: 'Contact',
          href: ''
        }
      ]
    },
    {
      id: 2,
      title: 'Shop',
      content: [
        {
          id: 1,
          text: 'All',
          href: ''
        },
        {
          id: 2,
          text: 'Lookbook',
          href: ''
        },
        {
          id: 3,
          text: 'Collections',
          href: ''
        },
        {
          id: 4,
          text: 'Featured',
          href: ''
        }
      ]
    },
    {
      id: 3,
      title: 'Collections',
      content: [
        {
          id: 1,
          text: 'Decors',
          href: ''
        },
        {
          id: 2,
          text: 'Furnitures',
          href: ''
        },
        {
          id: 3,
          text: 'Ceramic',
          href: ''
        },
        {
          id: 4,
          text: 'Lamps',
          href: ''
        }
      ]
    },
    {
      id: 4,
      title: 'Help',
      content: [
        {
          id: 1,
          text: 'Contact',
          href: ''
        },
        {
          id: 2,
          text: 'Login & Account',
          href: ''
        },
        {
          id: 3,
          text: 'Privacy Policy',
          href: ''
        },
        {
          id: 4,
          text: 'Refund Policy',
          href: ''
        }
      ]
    }
  ]
};

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {}
});

// export const {} = footerSlice.actions;

export default footerSlice.reducer;
