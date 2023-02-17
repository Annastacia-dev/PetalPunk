'use client';
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart'
import { useRouter } from 'next/router'
import Image from 'next/image';

const Wishlist = () => {

    const router = useRouter()

    const { wishlistItems, removeFromWishlist, addToCart, wishlistTotal } = useContext(CartContext)

    const [showAddToCartButton, setShowAddToCartButton] = useState(true)


  return (
    <div className="flex flex-col mt-32 justify-center items-center glass-container w-11/12">
        <h1 className="text-2xl text-rose-500 font-playfair font-bold ">Wishlist
        <span className="text-rose-500 text-lg font-bold mx-2">
            ({wishlistItems.length})
        </span>
        </h1>
        <hr className="w-3/4 border-rose-500 font border-1 mt-1" />
        <div className="flex flex-col justify-center items-center mt-10">
            {wishlistItems.length > 0? wishlistItems.map((item) => (
                <div key={item.id} className="flex flex-row justify-center items-center mt-3">
                    <p className="text-rose-500 text-lg font-bold mx-2">
                        {item.name}
                    </p>
                    <p className="text-rose-500 text-lg font-bold mx-2">
                        ${item.price}
                    </p>
                    {/* add to cart button */}
                    {
                        showAddToCartButton && (
                            <button className="bg-rose-500 text-white p-2 rounded-md"
                                onClick={() => {
                                addToCart(item)
                                removeFromWishlist(item)
                                router.push('/cart')
                            }}
                        >Add to cart</button>
                        )
                    }

                    {/* remove from wishlist button */}
                    <button className="bg-rose-500 text-white p-2 rounded-md"
                    onClick={() => removeFromWishlist(item)}
                    >Remove from wishlist</button>
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
