import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './root-saga'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    sagaMiddleware,
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
})

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch