import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import Image from 'next/image'

const Cart = () => {
    const { cartItems, removeFromCart, addToCart, cartTotal } = useContext(CartContext)

    console.log(cartItems)


  return (
    <div className='glass-container w-11/12 mt-32'>
    <div className="flex flex-col  justify-center items-center ">
        <div className='flex flex-row justify-center items-center' >    
            <h1 className="text-2xl text-rose-500 font-playfair font-bold ">Cart
            <span className="text-rose-500 text-lg font-bold mx-2">
                ({cartItems.length})
            </span>
            </h1>
        </div> 
    </div>
        <hr className="w-3/4 border-rose-500 font border-1 mt-1" />
        <div className="flex flex-col justify-center border-b border-rose-500 sm:w-9/12  p-4 items-start">
            {cartItems.length > 0 ? cartItems.map((item) => (
                <div key={item.id} className="flex relative flex-row justify-center items-start mt-3">
                    <Image src={item.image} alt={item.name} width={100} height={200} className="w-30 h-30 object-cover" />
                    <div className='flex flex-row ml-4'>
                        <div className="flex flex-col sm:w-96 w-56">
                        <p className="text-md relative  mx-2">{item.name}
                        <span className='absolute text-gray-700 sm:right-6 right-2'>${item.price}</span>
                        </p>
                        <p className="text-xs sm:w-0 mt-3 mx-2 ">{item.description.slice(0,60)}</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center absolute sm:-bottom-3 sm:-right-80 bottom-2 right-1 align-center'>
                        <button className="border-rose-500 border-2 text-rose-500 mr-3  p-2 w-10 h-8 flex justify-center items-center" onClick={() => removeFromCart(item)}>-</button>
                        <p className="text-rose-500 text-lg font-bold mx-2">{item.quantity}</p>
                        <button className="border-rose-500 ml-3 border-2 text-rose-500 p-2 w-10 h-8 flex justify-center items-center" onClick={() => addToCart(item)}>+</button>
                    </div>
                    
                </div>
            )) : (
                <div className="flex col-span-6 flex-row gap-2 justify-center items-center p-4">
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