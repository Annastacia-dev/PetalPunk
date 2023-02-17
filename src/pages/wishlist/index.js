'use client';
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { AiFillDelete } from 'react-icons/ai'
import { FaShoppingBag } from "react-icons/fa";

const Wishlist = () => {

    const router = useRouter()

    const { wishlistItems, removeFromWishlist, addToCart, wishlistTotal } = useContext(CartContext)

    const [showAddToCartButton, setShowAddToCartButton] = useState(true)


  return (
    <div className='glass-container w-11/12 mt-32'>
    <div className="flex flex-col  justify-center items-center ">
        <div className='flex flex-row justify-center items-center' >    
            <h1 className="text-2xl text-rose-500 font-playfair font-bold ">WishList
            <span className="text-rose-500 text-lg font-bold mx-2">
                ({wishlistItems.length})
            </span>
            </h1>
        </div> 
        <hr className="w-3/4 border-rose-500 font border-1 mt-1" />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            {wishlistItems.length > 0? wishlistItems.map((item) => (
                 <div key={item.id} className="flex border-b border-rose-500 p-4 relative flex-row justify-center items-center mt-3">
                    <Image src={item.image} alt={item.name} width={100} height={200} className="w-30 h-30 object-cover" />
                    <div className='flex flex-row ml-4'>
                        <div className="flex flex-col sm:w-96 w-56">
                        <p className="text-md relative  mx-2">{item.name}
                        <span className='absolute text-gray-700 sm:right-6 right-2'>${item.price}</span>
                        </p>
                        <p className="text-xs  mt-3 mx-2 ">{item.description}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 justify-center absolute sm:bottom-1 sm:-right-30 bottom-8 right-1 align-center'>
                    {
                        showAddToCartButton && (
                            <button className="bg-rose-500 border flex justify-center items-center gap-2 text-white p-2 text-sm"
                                onClick={() => {
                                addToCart(item)
                                removeFromWishlist(item)
                                if(wishlistItems.length === 1){
                                    router.push('/cart')
                                }
                            }}
                        >
                            <FaShoppingBag />
                            Add to cart</button>
                        )
                    }

                    {/* remove from wishlist button */}
                    <button className="border-rose-500 border text-rose-500 p-2"
                    onClick={() => removeFromWishlist(item)}
                    >
                     <AiFillDelete />
                    </button>
                        
                    </div>
                    
                </div>
            )) : (
                <div className="flex col-span-6 flex-row gap-2 justify-center items-center p-4">
                    <Image src="/images/star.png" alt="gifts" width={120} height={200} />
                    <h2 className="text-2xl font-playfair font-bold text-rose-600 text-center mt-3">Your wishlist is empty</h2>
                </div>
            )
        }
        </div>
        {
            wishlistItems.length > 0 && (
                <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-rose-500 text-lg font-bold mx-2">
                Total: ${wishlistTotal}
            </p>
        </div>
            )
        }
    </div>

  )
}

export default Wishlist
