import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { toPrice } from '../../../common/toPrice';
import { IProductInCart } from '../../../interfaces/product.interface';
import { useCustomDispatch } from '../../../hooks/redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem
} from '../../../store/features/cart';

function ItemsBag({
  product
}: {
  product: IProductInCart;
}): React.ReactElement {
  const dispatch = useCustomDispatch();
  const { id, imageUrl, price, quantity, sizeX, sizeY, title } = product;

  return (
    <Box sx={{ display: 'flex', height: '100%', gap: '2rem' }}>
      <Box
        component="img"
        src={imageUrl}
        sx={{
          borderRadius: '1rem',
          border: '1px solid',
          borderColor: 'oyster.main'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography sx={{ typography: { mobile: 'regular', laptop: 'h5' } }}>
            {title}
          </Typography>
          <Button
            variant="outlined"
            sx={{ minWidth: 'auto', padding: '1px', borderRadius: '100%' }}
            onClick={() => dispatch(removeItem(id))}
          >
            <CloseIcon fontSize="small" />
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{
              typography: 'regular',
              textTransform: 'uppercase',
              color: 'smoke.main'
            }}
          >
            Size: {`${sizeY} x ${sizeX}`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              typography: 'regular',
              textTransform: 'uppercase',
              color: 'smoke.main'
            }}
          >
            ${toPrice(price)}
          </Typography>
          <ButtonGroup size="small">
            <Button
              sx={{
                borderRight: 'none',
                '&:hover': {
                  borderRight: 'none'
                }
              }}
              disabled={quantity === 1}
              onClick={() => dispatch(decrementQuantity(id))}
            >
              <RemoveOutlinedIcon />
            </Button>
            <Button
              disableRipple
              sx={{
                borderLeft: 'none',
                borderRight: 'none',
                cursor: 'default',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'inherit',
                  borderColor: 'oyster.main',
                  borderLeft: 'none',
                  borderRight: 'none'
                }
              }}
            >
              {quantity}
            </Button>
            <Button
              sx={{
                borderLeft: 'none',
                '&:hover': {
                  borderLeft: 'none'
                }
              }}
              onClick={() => dispatch(incrementQuantity(id))}
            >
              <AddOutlinedIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}

export default ItemsBag;
