import Image from 'next/image'
import { useContext, useState } from 'react'
import makeStars  from '../../../utils/makeStars'
import { CartContext } from '../../../contexts/cart'

const Flower = ({ flower }) => {

    const { cartItems, removeFromCart, addToCart,  } = useContext(CartContext)

    const [showQuantitySelector, setShowQuantitySelector] = useState(false)

    
  return (
    <section className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ml-30 p-4 justify-center items-center w-3/4 h-3/4 glass-container">
        <div className="flex flex-col justify-center border-2  lg:w-80 w-64 items-center p-2 sm:ml-0 -ml-2">
        <Image src={flower.image} alt={flower.name} className="object-cover shadow-lg " width={500} height={300} />
        </div>
        <div className="flex  flex-col col-span-4 justify-center lg:ml-60  items-start p-4">
        <h2 className="text-2xl text-center mt-3 uppercase">{flower.name}</h2>
        <p className="text-md font-medium mt-3">${flower.price}
        <span className="ml-9 text-rose-500">
        {makeStars(flower.rating)}
        </span>
        </p>
        <p className="text-xs text-left border-t-2 mt-3 leading-6">{flower.description}</p>

        <div className="flex flex-col justify-center items-center mt-10 lg:ml-32 md:ml-44">
            <button onClick={() => addToCart(flower)} className="bg-rose-500 text-white p-2 rounded-md">Add to Cart</button>
        </div>

        <div className="flex flex-row justify-center items-center mt-3">
                <p className="text-rose-500 text-lg font-bold mt-3">Quantity</p>
                <button className="bg-rose-500 text-white p-2 rounded-md"
                onClick={() => removeFromCart(flower)}
                >-</button>
                <p className="text-rose-500 text-lg font-bold mx-2">
                    {cartItems.find((item) => item.name === flower.name)?.quantity || 0}
                </p>
                <button className="bg-rose-500 text-white p-2 rounded-md"
                onClick={() => addToCart(flower)}
                >+</button>
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

