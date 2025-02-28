import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function ():JSX.Element {
  return (
    <aside>
      <figure>
          <img className='d-block mx-auto' src={ process.env.PUBLIC_URL +"/images/illustration-empty-cart.svg"} alt="empty-cart-image-with no items" />
      </figure>
        <p className='text-center'>Your added items will appear here</p>
    </aside>
  )
}
