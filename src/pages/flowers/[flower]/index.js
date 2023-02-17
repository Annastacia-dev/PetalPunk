import Image from 'next/image'
import { useContext, useState } from 'react'
import makeStars  from '../../../utils/makeStars'
import { CartContext } from '../../../contexts/cart'
import { FaShoppingBag } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";

const Flower = ({ flower }) => {

    const { cartItems, removeFromCart, addToCart, wishlistItems, addToWishlist, removeFromWishlist } = useContext(CartContext)

    // if flower is in cart & quantity > 0, show quantity selector
    // if flower is in cart & quantity === 0, hide quantity selector
    // if flower is not in cart, hide quantity selector

    const showQuantitySelector = cartItems.find((item) => item.name === flower.name)?.quantity > 0

    return (
        <section className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ml-30 p-4 justify-center items-center w-3/4 h-3/4 glass-container">
            <div className="flex flex-col justify-center border-2  lg:w-80 w-64 items-center p-2 sm:ml-0 md:ml-8">
            <Image src={flower.image} alt={flower.name} className="object-cover shadow-lg " width={500} height={300} />
            </div>
            <div className="flex  flex-col col-span-4 justify-center lg:ml-60  items-start p-4">
            <h2 className="text-2xl text-center mt-3 uppercase">{flower.name}</h2>
            <p className="text-md font-medium mt-3">${flower.price}
            <span className="ml-9 text-rose-500">
            {makeStars(flower.rating)}
            </span>
            </p>
            <p className="text-xs text-left border-t-2 mt-5 leading-6">{flower.description}</p>

            <div className="flex sm:flex-row flex-col sm:gap-5 sm:ml-0 ml-8 justify-center items-center sm:mt-10 -mt-4">

            {/* add to cart */}

            {
                !showQuantitySelector && (
                    <div className="flex flex-col justify-center items-center mt-10 ">
                        <button className="border-rose-500 border-2 text-rose-500 p-2 flex justify-center items-center gap-3 sm:w-auto w-44"
                        onClick={() => {
                            addToCart(flower)
                            removeFromWishlist(flower)
                            }}>
                            <FaShoppingBag className='ml-2'  />
                            <span className='text-sm font-medium mr-2'>Add to cart</span>
                        </button>
                    </div>
                )
            }

            {
                showQuantitySelector &&  (
                    <div className="flex flex-row gap-2 justify-center items-center mt-10 lg:ml-28 md:ml-44">
                        <button className="border-rose-500 border-2 text-rose-500 p-2 w-10 h-8 flex justify-center items-center"
                        onClick={() => {
                            removeFromCart(flower)
                        }}
                        >-</button>
                        <p className="text-rose-500 text-lg font-bold mx-2">
                            {cartItems.find((item) => item.name === flower.name)?.quantity || 0}
                        </p>
                        <button className="border-rose-500 border-2 text-rose-500 p-2 w-10 h-8 flex justify-center items-center"
                        onClick={() => addToCart(flower)}
                        >+</button>
                    </div>
                )

            }

            {/* add to wishlist */}

            {
                !showQuantitySelector && (
                    !wishlistItems.find((item) => item.name === flower.name) && (
                        <div className="flex flex-col justify-center items-center sm:mt-10 mt-6">
                            <button className="border-rose-500 border-2 text-rose-500 p-2 flex justify-center items-center gap-3 sm:w-auto w-44"
                            onClick={() => {addToWishlist(flower)}}>
                                <BsFillBookmarkStarFill className='ml-2'  />
                                <span className='text-sm font-medium mr-2'>Add to wishlist</span>
                            </button>
                        </div>
                    )
                )
            }

            </div>


            </div>




        </section>
  )
}

export default Flower

export async function getStaticPaths() {
    const {flowers} = await import('../../../data/flowers.json')
    const paths = flowers.map((flower) => ({
        params: {flower: flower.name}
    }))
    return {paths, fallback: false}
    }

export async function getStaticProps({ params }) {
    const {flowers} = await import('../../../data/flowers.json')
    const flower = flowers.find((flower) => flower.name === params.flower)
    return {props: {flower}}
}

