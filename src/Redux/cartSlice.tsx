import { createSlice,current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import Quantity from '../components/Quantity';
interface Image{
    desktop?:any,
    mobile?:string,
    tablet?:string,
    thumbnail?:string
}

interface CartType{
    image?:Image;
    name?:string;
    category?:string,
    price?:number,
    id?:any;
    isClicked?:Boolean,
    quantity?:number

}
interface CartState{
    cart:CartType
}
const initialState={
    cart:[],
} 

export const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state:any,action){
            let productAddedToCart={...action.payload.product,quantity:1};
            state.cart.push(productAddedToCart);
        },
        removeFromCart(state:any,action){
            let filteredResult=state.cart.filter((item:any) =>item.id !==action.payload.id)  
            state.cart=filteredResult

        },
        incrementCartQuantity(state:any,action){
            let product = state.cart.find((item:any)=> item.id == action.payload.transferProduct.product.product.id)
            if(product){
                product.quantity=action.payload.quantity+1; 
                product.sum=product.quantity*product.price;
            }  
           },

        decrementCartQuantity(state:any,action:any):void{
            let product = state.cart.find((item:any)=> item.id == action.payload.transferProduct.product.product.id);    
            if(product && action.payload.transferProduct.product.product.quantity >1){
                product.quantity=action.payload.quantity-1; 
                product.sum=product.quantity*product.price;
            }

            else if(action.payload.transferProduct.product.product.quantity==1){ 
            let filteredResult=state.cart.filter((item:any) =>item.id !==action.payload.transferProduct.product.product.id);  
            state.cart=filteredResult;
            }
           },
           calculateCartTotal(state:any){
            let initialValues=0;
            state.cart.reduce((accumulator:number,item:any)=>accumulator + item.sum,initialValues)

            },
           resetCart(state){
            state.cart=[]
           }
        },
        });

export const {addToCart,removeFromCart, incrementCartQuantity,decrementCartQuantity,calculateCartTotal,resetCart} =cartSlice.actions;

export  default cartSlice.reducer