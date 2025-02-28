import Product from './Product';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Heading from './Heading';
import Cart from './Cart';
import {useAppSelector } from '../Redux/hooks';
import CartOverlay from './CartOverlay';

export default function Main():JSX.Element {
  const orderValue=useAppSelector((state)=>state.order)
  const products=useAppSelector((state)=>state.product.products);

  return (
    <main className='container'>
    <section className='row'>
      <header className='col-lg-6 heading-container'>
        <Heading/>
      </header>
    </section>
        <div className="row w-100">
        <div className='col-lg-6 col-md-12 col-sm-12'> 
        <div className="row product-container">
      
        {products.map((product:unknown,index:number)=>{
        return(
             <div  key={index} >
                <Product product={product} />
        </div>)})}
       </div>
        </div>
        <section className='col-lg-3 col-md-6 col-sm-8 cart-styling'>
            <Cart/>
      </section>
</div>

      <section className={orderValue.orderConfirmed ?'cart-overlay' :"none"} >
      { orderValue.orderConfirmed && <CartOverlay/>}
      </section>
    
    </main>
  )
}
