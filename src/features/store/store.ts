import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from "../counter/counterSlice.ts";
import { EmailSlice } from '../email/emailSlice.tsx';


export const store = configureStore({
    reducer: {
        counter:CounterSlice, email:EmailSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch