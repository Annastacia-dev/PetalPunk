import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import Image from 'next/image'
import { AiFillDelete } from 'react-icons/ai'
import { usePageTitle } from '../../custom/title'


const Cart = () => {
    const { cartItems, removeFromCart, addToCart, cartTotal, clearCart } = useContext(CartContext)
    usePageTitle()

  return (
    <div className='glass-container w-11/12 mt-32 dark:bg-black'>
    <div className="flex flex-col  justify-center items-center ">
        <div className='flex flex-row justify-center items-center' >    
            <h1 className="text-2xl text-rose-500 font-playfair font-bold ">Cart
            <span className="text-rose-500 text-lg font-bold mx-2">
                ({cartItems.length})
            </span>
            <span>
                {
                    cartItems && cartItems.length > 0 && (
                        <button className='border-2 border-rose-600 p-1  ml-12 font-poppins  justify-center items-center font-normal text-sm'
                        onClick={clearCart}
                        >
                            <AiFillDelete title="Clear cart" />
                        </button>
                    )
                }
            </span>
            </h1>
        </div> 
        <hr className="w-3/4 border-rose-500 font border-1 mt-1" />
    </div>
        <div className="flex flex-col justify-center sm:w-9/12 items-center">
            {cartItems.length > 0 ? cartItems.map((item) => (
                <div key={item.id} className="flex border-b border-rose-500 p-4  relative flex-row justify-center items-center mt-3">
                    <Image src={item.image} alt={item.name} width={100} height={200} className="w-30 h-30 object-cover" />
                    <div className='flex flex-row ml-4'>
                        <div className="flex flex-col sm:w-96 w-56">
                        <p className="text-md relative  mx-2">{item.name}
                        <span className='absolute text-gray-700 dark:text-gray-300 sm:right-6 right-2'>${item.price}</span>
                        </p>
                        <p className="text-xs  mt-3 mx-2 ">{item.description}</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center absolute sm:bottom-3 sm:right-8 bottom-2 right-1 align-center'>
                        <button className="border-rose-500 border-2 text-rose-500 mr-3  p-2 w-10 h-8 flex justify-center items-center" onClick={() => removeFromCart(item)}>-</button>
                        <p className="text-rose-500 text-lg font-bold mx-2">{item.quantity}</p>
                        <button className="border-rose-500 ml-3 border-2 text-rose-500 p-2 w-10 h-8 flex justify-center items-center" onClick={() => addToCart(item)}>+</button>
                    </div>
                    
                </div>
            )) : (
                <div className="flex flex-row gap-2 sm:ml-80 justify-center items-center p-4">
                    <Image src="/images/emptycart.png" alt="gifts" width={150} height={200} />
                    <h2 className="text-2xl font-playfair font-bold text-rose-600 text-center mt-3">Your cart is empty</h2>
                </div>
            )
        }
        </div>
        {
            cartItems.length > 0 && (
                <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-rose-500 text-lg font-bold mx-2">
                Total: ${parseInt(cartTotal)}
            </p>
        </div>
            )
        }
    
    </div>

  )
}

export default Cart