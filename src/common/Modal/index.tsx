import { Drawer } from '@mui/material';
import React from 'react';

function Modal({
  anchor,
  isOpen,
  children,
  toggleDrawer
}: {
  anchor: 'top' | 'left' | 'right' | 'bottom';
  isOpen: boolean;
  children: JSX.Element;
  toggleDrawer: () => (event: React.KeyboardEvent | React.MouseEvent) => void;
}): React.ReactElement {
  return (
    <Drawer
      anchor={anchor}
      PaperProps={{
        sx: {
          height: '100%',
          width: { mobile: '100%', laptop: '50%' }
        }
      }}
      open={isOpen}
      onClose={toggleDrawer()}
    >
      {children}
    </Drawer>
  );
}

export default Modal;
