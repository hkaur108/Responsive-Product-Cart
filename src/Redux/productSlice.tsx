import { createSlice } from '@reduxjs/toolkit'
import {storeData} from '../data';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface Image{
    desktop?:any,
    mobile?:string,
    tablet?:string,
    thumbnail?:string
}

interface Products{
    image:Image;
    name:string;
    category:string,
    price:number | string | any,
    id?:any;
    isClicked?:Boolean,
    quantity:number
  }

interface ProductState{
    products:Products[],
}

const initialState:ProductState ={
    products:storeData,
}
export const productSlice =createSlice({
    name:'product',
    initialState,
    reducers:{
        incrementQuantity:(state,action):void=>{
             let product = state.products.find((item:any)=> item.id == action.payload.transferProduct.product.product.id)
             if(product){
                product.quantity=action.payload.quantity+1;
            }  
           },

        checkIsClicked:(state:any,action:PayloadAction<boolean>):void=>{
            let product = state.products.find((item:any)=> item.id ==action.payload)
            if(product){
                product.isClicked=!product.isClicked;
                product.quantity=product.quantity+1;
            }
        },
        decrementQuantity:(state,action):void=>{
            let product = state.products.find((item:any)=> item.id ==action.payload.transferProduct.product.product.id) 
            let minQuantity=action.payload.transferProduct.product.product.quantity
            if(product && minQuantity >1){
                product.quantity=action.payload.quantity-1; 
            } 
            if(minQuantity == 1 && product){
                 product.isClicked=false 
                 product.quantity=0

            }
           },
           resetProductState:(state:any,action:PayloadAction<number>):void=>{
               let product =state.products.find((item:any)=> item.id  ==action.payload);
               if(product){
                    product.quantity=0
                }
            },

            clearProductState:(state)=>{
                state.products.forEach((item)=>{
                    item.isClicked=false
                    item.quantity=0
                })

            }
        }});
export const { incrementQuantity, decrementQuantity, checkIsClicked, resetProductState,clearProductState} = productSlice.actions
export const selectCount = (state: RootState) => state.product.products;
export default productSlice.reducer
