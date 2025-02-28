import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useAppSelector } from '../Redux/hooks';
import { useAppDispatch } from '../Redux/hooks';
import { flipOrder } from '../Redux/OrderConfirmedSlice';
import {clearProductState} from '../Redux/productSlice';

export default function ConfirmOrder():JSX.Element {
  const dispatch =useAppDispatch();
  const cartProducts=useAppSelector((state)=>state.cart.cart);
  let initialValue:number=0;
  const orderTotalValue= cartProducts.reduce((accumulator:number,item:any)=>accumulator + (item.price * item.quantity) ,initialValue)
  
  const handleConfirmOrder =()=>{
     dispatch(flipOrder())
     dispatch(clearProductState())
  }
  
  return (
    <section>
        <div className='w-100 d-flex align-items-center justify-content-between'>
            <p>Order Total</p>
            <p className="fw-bold fs-5">${orderTotalValue.toFixed(2)}</p>
        </div>
          <div className='carbon-delivery d-flex align-items-center justify-content-evenly'><figure>
            <img src= { process.env.PUBLIC_URL +"/images/icon-carbon-neutral.svg"} alt="carbon neutral delivery icon" />
           </figure>
           <p> This is a <strong className="carbon">carbon-neutral</strong> delivery</p>
        </div>
        <button className='cart-confirm-order-button  w-100 p-2' onClick={handleConfirmOrder}>Confirm Order</button>
    </section>
  )
}
