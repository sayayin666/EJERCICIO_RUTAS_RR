import { useNavigate } from "react-router-dom"

function Cart({ cart, clearCart }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <p key={index}>{item.name} - ${item.price}</p>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
      <br />
      <button onClick={() => navigate('/products')}>Seguir comprando</button>
    </div>
  );
}
export default Cart