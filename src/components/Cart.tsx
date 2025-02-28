import { useEffect ,useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useAppSelector } from '../Redux/hooks';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
import ConfirmOrder from './ConfirmOrder';

export default function Cart():JSX.Element {
    const cartProducts=useAppSelector((state)=>state.cart.cart);
    const [len,setlen]=useState<number>(0);
    const [totalCartItems,settotalCartItems] =useState<number>(0);
    useEffect(()=>{
      let l=cartProducts.length;
      setlen(l);
    },[cartProducts.length])
    
  useEffect(()=>{
    setInterval(()=>{
        settotalCartItems(totalCartValue)

    },2000)
  },[totalCartItems]);
  let initialValues=0;
  let totalCartValue=cartProducts.reduce((accumulator,item:any)=>accumulator + item.quantity,initialValues);
  
  return (
    <section className='w-100 p-4 cart-container' style={{backgroundColor:"#fff",borderRadius:"15px"}}>
          <h4 className='cart-heading'>Your Cart ({ len > 0 ? totalCartValue : 0})</h4>
          {len==0 && (<EmptyCart/>)}
          {
            cartProducts.map((item:any,index:number)=>{
              return(
                <div key={index}>
                 { len > 0 && <CartItems item={item}/> }
                </div>)})}
            {(len > 0 ) && <ConfirmOrder/>}
    </section>
  )
}


