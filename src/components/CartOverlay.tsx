import { useAppDispatch } from '../Redux/hooks';
import { flipOrder } from '../Redux/OrderConfirmedSlice';
import {useAppSelector } from '../Redux/hooks';
import {resetCart} from '../Redux/cartSlice';

const CartOverlay:React.FC = ():JSX.Element => {
  const cartProducts=useAppSelector((state)=>state.cart.cart);
  const dispatch =useAppDispatch();
   let initialValue=0;
  const orderTotalValue= cartProducts.reduce((accumulator,item:any)=>accumulator + (item.price * item.quantity) ,initialValue)
  
  const handleStartOver=()=>{
      dispatch(flipOrder());
      dispatch(resetCart());
  }
  return (
    <div className='final-order-confirmed-background'>
    <section className='final-order-confirmed'>
      <figure>
        <img src={process.env.PUBLIC_URL+"/images/icon-order-confirmed.svg"} alt="order confirmation" width={'30px'}/>
      </figure>
      <header><h4 className='fw-bold'>Order Confirmed</h4><small className='text-secondary'>We hope you enjoy your food!</small></header>
      <section className='list-items-styling'>
            {
        cartProducts.map((item:any,index:number)=>{
          return(
              <div key={index}>
                <div className='order-list-styling d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                  <figure className='order-picture'>
                    <img src={process.env.PUBLIC_URL+ item.image.thumbnail} alt="image of the product" width={'50px'}/>
                 </figure>
                <div>
                  <small className='order-confirmed-name'>{item.name}</small><br/>
                  <small> <span className='order-confirmed-quantity'>{item.quantity}x</span> @ ${(item.price).toFixed(2)}</small>
                </div>
                 </div>
                <div>
                  <small className='order-product'>${(item.quantity * item.price).toFixed(2)}</small>
                </div>
                </div>
                </div>
        
  
          )
        })
      
      }
      <div className='cart-order-total d-flex align-items-center justify-content-between'>
        <div className='order-total'>Order total</div>
        <div className='fw-bold fs-5'>${orderTotalValue.toFixed(2)}</div>
      </div>
      </section>
      <button className='btn order-confirmed-button my-3' onClick={()=>handleStartOver()}>Start New Order</button>
    </section>
    </div>
  )
}

export default CartOverlay