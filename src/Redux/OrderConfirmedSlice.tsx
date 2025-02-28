import { createSlice } from '@reduxjs/toolkit'

interface OrderState{
    orderConfirmed:boolean
}

const initialState:OrderState={
    orderConfirmed:false,
}
export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        flipOrder(state:OrderState){
            state.orderConfirmed=!state.orderConfirmed
        },
    
    
    }})

export const {flipOrder} =orderSlice.actions;
export  default orderSlice.reducer;
