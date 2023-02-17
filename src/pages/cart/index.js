import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'

const Cart = () => {
    const { cartItems, removeFromCart, addToCart, cartTotal } = useContext(CartContext)
  return (
    // display cart items
    <div className="flex flex-col mt-32 justify-center items-center">
        <h1 className="text-2xl font-bold mt-3">Cart</h1>
        <div className="flex flex-col justify-center items-center mt-10">
            {cartItems.length > 0 ? cartItems.map((item) => (
                <div key={item.id} className="flex flex-row justify-center items-center mt-3">
                    <button className="bg-rose-500 text-white p-2 rounded-md"
                    onClick={() => removeFromCart(item)}
                    >-</button>
                    <p className="text-rose-500 text-lg font-bold mx-2">
                        {item.quantity}
                    </p>
                    <button className="bg-rose-500 text-white p-2 rounded-md"
                    onClick={() => addToCart(item)}
                    >+</button>
                    <p className="text-rose-500 text-lg font-bold mx-2">
                        {item.name}
                    </p>
                    <p className="text-rose-500 text-lg font-bold mx-2">
                        ${item.price}
                    </p>
                </div>
            )) : (
                <p className="text-lg font-bold mx-2">
                    Your cart is empty
                </p>
            )
        }
        </div>
        {
            cartItems.length > 0 && (
                <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-rose-500 text-lg font-bold mx-2">
                Total: ${cartTotal}
            </p>
        </div>
            )
        }
    </div>

  )
}

export default Cart