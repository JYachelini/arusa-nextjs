'use client';

import React, { useState } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

import Left from './Left';
import Center from './Center';
import Right from './Right';

function Navbar({ color = false }: { color?: boolean }): React.ReactElement {
  const [colorText, setColorText] = useState(color);

  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);

  const toggleDrawer =
    (state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setColorText(!colorText);

      setState(!state);
    };
  return (
    <AppBar
      sx={{
        position: 'absolute',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        zIndex: 10
      }}
    >
      <Toolbar
        sx={{
          position: 'relative',
          height: { mobile: '64px', tablet: '52px' },
          width: '100%',
          padding: '0'
        }}
        id="AppBar"
      >
        <Box
          sx={{
            transition: 'all 300ms ease-in-out',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            '&>button:nth-of-type(-n+2)': {
              width: 'fit-content'
            },
            '&>div:nth-of-type(1)': {
              width: 'fit-content'
            }
          }}
        >
          <Left
            color={colorText}
            toggleDrawer={() => toggleDrawer(isOpenLeft, setIsOpenLeft)}
            isOpen={isOpenLeft}
          />
          <Center color={colorText} />
          <Right
            color={colorText}
            isOpen={isOpenRight}
            toggleDrawer={() => toggleDrawer(isOpenRight, setIsOpenRight)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
