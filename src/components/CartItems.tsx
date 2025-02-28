import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { removeFromCart} from '../Redux/cartSlice';
import { useAppDispatch } from '../Redux/hooks';
import { checkIsClicked,resetProductState } from '../Redux/productSlice';

export default function CartItems(item:any):JSX.Element{
  const dispatch =useAppDispatch();
  const {name,category,price,quantity,id}=item.item;
  const [values,setValues]=useState<any>({productName:"", productCategory:"",productPrice:0, productQuantity:0,productId:0,productTotal:0})


  useEffect(()=>{
        setValues({...values,productName:name,productCategory:category, productId:id, productQuantity:quantity, productPrice:price,})
      },[item,quantity])
      
      const handleRemoveItem =(item:any)=>{
        dispatch(removeFromCart(item));
        dispatch(checkIsClicked(id))
        dispatch(resetProductState(id));
      
      }
  return (
    
    <section className='d-flex align-items-center justify-content-between listStyles'>
          <article>
             <header><p className='my-1 single-cart-name'>{values.productName}</p> </header>
            <div className='w-100  d-flex align-items-center justify-space-between'>
              <small className='single-cart-quantity'>{values.productQuantity}<span className='text-danger fw-bold'>x</span></small>
              <small className='single-cart-rate'> <span className='text-secondary'> @ </span> ${(values.productPrice).toFixed(2)}</small>
              <small className='single-cart-total'>${(values.productQuantity*values.productPrice).toFixed(2)}</small>
            </div>
          </article>
        <figure onClick={()=>handleRemoveItem(item.item)} className='remove-icon' style={{border:"1px solid grey",borderRadius:"50%", width:"20px", padding:"2px 1px",cursor:"pointer"}}>
          <img src={process.env.PUBLIC_URL +"/images/icon-remove-item.svg"} alt="button to remove cart items" style={{margin:"auto",display:"block", width:"80%"}}/>
        </figure>
    </section>
  )
}
