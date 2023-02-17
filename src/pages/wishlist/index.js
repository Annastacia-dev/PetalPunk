'use client';
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart'
import { useRouter } from 'next/router'

const Wishlist = () => {

    const router = useRouter()

    const { wishlistItems, removeFromWishlist, addToCart, wishlistTotal } = useContext(CartContext)

    const [showAddToCartButton, setShowAddToCartButton] = useState(true)


  return (
    <div className="flex flex-col mt-32 justify-center items-center">
        <h1 className="text-2xl font-bold mt-3">Wishlist</h1>
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
                <p className="text-lg font-bold mx-2">
                    Your wishlist is empty
                </p>
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
