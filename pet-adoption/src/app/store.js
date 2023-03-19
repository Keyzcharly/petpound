import { configureStore } from '@reduxjs/toolkit';
import { petApi } from '../services/petApi';

export default configureStore({
    reducer: {
      [petApi.reducerPath]: petApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(petApi.middleware),
  });

