import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import transactionReducer from './transactions/transactionSlice'
import networthReducer from './networth/networthSlice'
import profileReducer from './profile/profileSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        networth: networthReducer,
        transactions: transactionReducer,
    }
})

export default store;