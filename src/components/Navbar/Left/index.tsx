import React from 'react';
import { Menu } from '@mui/icons-material';
import { IconButton, Tooltip, Typography } from '@mui/material';
import LeftMenu from './LeftMenu';
import ModalNoBackdrop from '../../../common/ModalNoBackDrop';

function Left({
  color,
  toggleDrawer,
  isOpen
}: {
  color: boolean;
  toggleDrawer: () => (event: React.KeyboardEvent | React.MouseEvent) => void;
  isOpen: boolean;
}): React.ReactElement {
  return (
    <>
      <Tooltip title="Trigger menu">
        <IconButton
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '1rem',
            margin: 0,
            marginLeft: { mobile: '1rem', tablet: '4.5rem' },
            cursor: 'pointer',
            color: `${!color ? 'black' : 'white'}.main`
          }}
          onClick={toggleDrawer()}
        >
          <Menu />
          <Typography variant="small" lineHeight="32px">
            SHOP
          </Typography>
        </IconButton>
      </Tooltip>
      <ModalNoBackdrop
        anchor="left"
        idContainer="Appbar"
        isOpen={isOpen}
        color={color}
        toggleDrawer={toggleDrawer}
      >
        <LeftMenu />
      </ModalNoBackdrop>
    </>
  );
}

export default Left;
