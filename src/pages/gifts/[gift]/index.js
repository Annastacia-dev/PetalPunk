import Image from 'next/image'
import { useContext, useState } from 'react'
import makeStars  from '../../../utils/makeStars'
import { CartContext } from '../../../contexts/cart'
import { FaShoppingBag } from "react-icons/fa";

const Gift = ({ gift }) => {

    const { cartItems, removeFromCart, addToCart,  } = useContext(CartContext)

    const showQuantitySelector = cartItems.find((item) => item.name === gift.name)?.quantity > 0

    return (
        <section className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ml-30 p-4 justify-center items-center w-3/4 h-3/4 glass-container">
            <div className="flex flex-col justify-center border-2  lg:w-80 w-64 items-center p-2 sm:ml-0 -ml-2">
            <Image src={gift.image} alt={gift.name} className="object-cover shadow-lg " width={500} height={300} />
            </div>
            <div className="flex  flex-col col-span-4 justify-center lg:ml-60  items-start p-4">
            <h2 className="text-2xl text-center mt-3 uppercase">{gift.name}</h2>
            <p className="text-md font-medium mt-3">${gift.price}
            <span className="ml-9 text-rose-500">
            {makeStars(gift.rating)}
            </span>
            </p>
            <p className="text-xs text-left border-t-2 mt-3 leading-6">{gift.description}</p>

            {
                !showQuantitySelector && (
                    <div className="flex flex-col justify-center items-center mt-10 lg:ml-28 md:ml-44">
                        <button className="border-rose-500 border-2 text-rose-500 p-2 flex justify-center items-center gap-3"
                        onClick={() => {addToCart(gift)}}>
                            <FaShoppingBag className='ml-2'  />
                            <span className='text-sm font-medium mr-2'>Add to cart</span>
                        </button>
                    </div>
                )
            }

            {
                showQuantitySelector && (
                    <div className="flex flex-row gap-2 justify-center items-center mt-10 lg:ml-28 md:ml-44">
                        <button className="border-rose-500 border-2 text-rose-500 p-2 w-10 h-8 flex justify-center items-center"
                        onClick={() => {removeFromCart(gift)}}
                        >-</button>
                        <p className="text-rose-500 text-lg font-bold mx-2">
                            {cartItems.find((item) => item.name === gift.name)?.quantity || 0}
                        </p>
                        <button className="border-rose-500 border-2 text-rose-500 p-2 w-10 h-8 flex justify-center items-center"
                        onClick={() => addToCart(gift)}
                        >+</button>
                    </div>
                )

            }

            </div>




        </section>
  )
}

export default Gift

export async function getStaticPaths() {
    const {gifts} = await import('../../../data/gifts.json')
    const paths = gifts.map((gift) => ({
        params: {gift: gift.name}
    }))
    return {paths, fallback: false}
    }

export async function getStaticProps({ params }) {
    const {gifts} = await import('../../../data/gifts.json')
    const gift = gifts.find((gift) => gift.name === params.gift)
    return {props: {gift}}
}

