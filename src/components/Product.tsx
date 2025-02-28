import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { useAppDispatch } from '../Redux/hooks';
import { checkIsClicked} from '../Redux/productSlice';
import { addToCart,calculateCartTotal } from '../Redux/cartSlice';
import Quantity from './Quantity';

interface PropTypes{
  image:string;
  name:string;
  category:string,
  price:string,
  quantity?:any;
  isClicked?:Boolean;
}
export default function Product(product:any):JSX.Element {
  let {image,name,category,isClicked,quantity,price,id} = product.product;
  const dispatch =useAppDispatch();


  const handleClick=(product:unknown)=>{
     dispatch(checkIsClicked(id));
     dispatch(addToCart(product)); 
     dispatch(calculateCartTotal())
}

  return (
    <section className='product' style={{width:"200px"}}>
        <figure className='position-relative'>
            <img  className={isClicked  && quantity >0 ?  'selectedItem' :"none"}  src={process.env.PUBLIC_URL+ image.desktop} alt={name} width="200px" style={{borderRadius:"10px"}}/>
            {
               ( isClicked ==false)  ?
              (<button onClick={()=>handleClick(product)} style={{borderRadius:"30px",fontSize:'.8rem'}} 
                className='w-75 btn btn-light border border-secondary fw-bold card-button position-absolute top-100 start-50 translate-middle'><img src={process.env.PUBLIC_URL +"/images/icon-add-to-cart.svg"} alt="add-to-cart" 
            /> Add to Cart</button>) : 
            (
            <div className=' w-75 position-absolute top-100 start-50 translate-middle bg-danger text-light'style={{borderRadius:"30px"}}> 
              {(isClicked == true) && <Quantity product={product}/>}
            </div>
            )
            } 
        </figure>
       <article className='my-4'>
        <small className='product-name'>{category}</small>
        <p className='product-category'>{name}</p>
        <h6 className='product-price'>${price.toFixed(2)}</h6>
       </article>
    </section>
  )
}
