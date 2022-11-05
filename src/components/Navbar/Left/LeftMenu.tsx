import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

function LeftMenu(): React.ReactElement {
  const menuList = [
    {
      id: 1,
      title: 'Arusa',
      list: [
        {
          id: 1,
          title: 'Home',
          href: '/'
        },
        {
          id: 2,
          title: 'About',
          href: '/'
        },
        {
          id: 3,
          title: 'Blog',
          href: '/'
        },
        {
          id: 4,
          title: 'Contact',
          href: '/'
        }
      ]
    },
    {
      id: 2,
      title: 'Shop',
      list: [
        {
          id: 1,
          title: 'All',
          href: '/'
        },
        {
          id: 2,
          title: 'Lookbook',
          href: '/'
        },
        {
          id: 3,
          title: 'Collections',
          href: '/'
        },
        {
          id: 4,
          title: 'Featured',
          href: '/'
        }
      ]
    },
    {
      id: 3,
      title: 'Collections',
      list: [
        {
          id: 1,
          title: 'Decors',
          href: '/'
        },
        {
          id: 2,
          title: 'Furnitures',
          href: '/'
        },
        {
          id: 3,
          title: 'Ceramics',
          href: '/'
        },
        {
          id: 4,
          title: 'Lamps',
          href: '/'
        }
      ]
    }
  ];

  const menuProduct = {
    id: 1,
    title: 'Native light chair',
    href: 'https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,w_982,dpr_2.0,q_auto:good,b_rgb:f5f6f4,ar_3:2/v4/catalog/product/asset/5/e/4/2/5e42efcc5fdd8e95f669e7fc3868dc486cdb521e_DVCKIL006YEL_UK_Kilda_Stripe_100_Linen_Duvet_Cover_Super_King_Gold_UK_ar3_2_LB03_LD.jpg'
  };
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: { mobile: '1rem', laptop: '0' }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', laptop: 'row' },
          width: '60%',
          justifyContent: { mobile: 'start', laptop: 'center' },
          alignItems: { mobile: 'start', laptop: 'center' },
          gap: { mobile: '1rem', laptop: '5rem' },
          marginLeft: { mobile: '1rem', tablet: '4.5rem', laptop: '0' }
        }}
      >
        {menuList.map((menu) => {
          return (
            <Box
              key={menu.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                gap: '1rem'
              }}
            >
              <Typography
                sx={{
                  typography: { mobile: 'h3', laptop: 'h5', desktop: 'h3' },
                  color: 'stormy.main'
                }}
              >
                {menu.title}
              </Typography>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
              >
                {menu.list.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      sx={{
                        typography: 'small',
                        textTransform: 'uppercase',
                        color: 'ash.main',
                        width: 'fit-content'
                      }}
                      underline="hover"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          width: '40%',
          position: 'relative',
          display: { mobile: 'none', laptop: 'block' }
        }}
      >
        <Box
          component="img"
          src={menuProduct.href}
          sx={{ width: '100%', height: '100%' }}
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            textAlign: 'left',
            color: 'cloudy.main',
            marginBottom: '3rem',
            marginLeft: '2rem'
          }}
        >
          <Typography
            sx={{ typography: 'regular', textTransform: 'uppercase' }}
          >
            Featured product
          </Typography>
          <Typography sx={{ typography: 'h4' }}>{menuProduct.title}</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default LeftMenu;
