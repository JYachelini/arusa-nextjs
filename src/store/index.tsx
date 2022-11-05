'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from './webStorage';

import cartReducer from './features/cart';
import homeReducer from './features/home';
import footerReducer from './features/footer';
import { PersistGate } from 'redux-persist/lib/integration/react';

const persistCartConfig = {
  key: 'cart',
  storage,
  whitelist: ['products', 'totalPrice', 'totalItems']
};

const store = configureStore({
  reducer: {
    cart: persistReducer<ReturnType<typeof cartReducer>>(
      persistCartConfig,
      cartReducer
    ),
    home: homeReducer,
    footer: footerReducer
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

const persistor = persistStore(store);

export const StoreProdiver = ({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
