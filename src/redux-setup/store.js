import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // sử dụng localStorage mặc định
import { createStore } from 'redux';

const persistConfig={
    key:"vietpro",
    storage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);


// export const store=configureStore({
//     reducer:{
//         cart:cartReducer,
//     }
// });

export { store, persistor };
