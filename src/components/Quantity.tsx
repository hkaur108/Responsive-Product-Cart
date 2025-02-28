import  { useState } from 'react'
import {incrementQuantity, decrementQuantity} from '../Redux/productSlice';
import { useAppDispatch,useAppSelector } from '../Redux/hooks';
import { incrementCartQuantity,decrementCartQuantity } from '../Redux/cartSlice';

export default function Quantity(product:any):JSX.Element {
  let {quantity}=product.product.product;
  const [count,setcount] =useState<number>(0);
  const dispatch =useAppDispatch();

  const handleDecrement=(transferProduct:unknown)=>{
    if(count>0){
       setcount(count=>count-1)
      dispatch(decrementQuantity({transferProduct,quantity:count}));
      dispatch(decrementCartQuantity<any>({transferProduct,quantity:count}));
     
    }
  }
  const handleIncrement=(transferProduct:unknown)=>{
      setcount(count=>count+1)
      dispatch(incrementQuantity({transferProduct,quantity:count}));
      dispatch(incrementCartQuantity({transferProduct,quantity:count}))
    }
  return (
    <section style={{borderRadius:"10px", padding:"0.5rem"}} className='quantityStyles'>
          <div className='d-flex align-items-center justify-content-around'>
              <button className='btn' onClick={()=>handleDecrement(product)} style={{width:"20px", border:"1px solid white",borderRadius:"50%", padding:"5px",cursor:"pointer"}}>
                  <img src={process.env.PUBLIC_URL+'/images/icon-decrement-quantity.svg'} alt='decrement' style={{margin:"auto",display:"block", width:"100%", height:"7px"}}/>
                </button>
                <div className='text-light'>{quantity}</div>
                <button className='btn' onClick={()=>handleIncrement(product)} style={{width:"20px", border:"1px solid white",borderRadius:"50%", padding:"5px",cursor:"pointer"}} >
                  <img src={process.env.PUBLIC_URL+'/images/icon-increment-quantity.svg'} alt='increment' style={{margin:"auto",display:"block", width:"100%"}}/>
                </button>
              </div>
        </section>
  )
}
