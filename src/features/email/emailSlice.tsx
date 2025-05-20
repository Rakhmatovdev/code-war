import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../store/store.ts";

interface EmailState {
    email: string
}

const initialState: EmailState = {
    email:'',
}

export const EmailSlice = createSlice({
    name: 'myemail',
    initialState,
    reducers: {
        adder: (state,action) => {
            state.email = action.payload
        }
       
    },
})

export const { adder } = EmailSlice.actions

export const selectEmail = (state: RootState) => state.email

export default EmailSlice.reducer