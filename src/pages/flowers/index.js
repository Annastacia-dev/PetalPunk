import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Flowers = ({ flowers }) => {

    // filter by price, a slider

    const [price, setPrice] = useState(50)

    const handleChange = (e) => {
        setPrice(e.target.value)
    }

    const filteredFlowers = flowers.filter((flower) => flower.price <= price)
  
  return (
    <div className='mt-32 '>
     <div className="flex flex-col justify-center items-start p-4">
        <h2 className="text-sm text-center mt-3">Filter by price ${price}
        </h2>
        <input type="range" min="15" max="50" value={price} onChange={handleChange} className="w-50 bg-rose-300 mt-3 rounded-full appearance-none outline-none overflow-hidden" />
      </div>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}

     className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  ">
      {filteredFlowers.map((flower) => (
        <Link key={flower.id} className="flex  flex-col justify-center items-center p-4" href={`/flowers/${flower.name}`}>
          <Image src={flower.image} alt={flower.name} width={200} height={200}
          className="rounded-lg shadow-lg sm:w-40 sm:h-40 object-cover transform transition-all duration-300 hover:scale-150"
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
          <h2 className="text-sm text-center mt-3">{flower.name}</h2>
          <p className="text-xs ml-3 text-gray-500">${flower.price}</p>
        </Link>
      ))}
    </motion.section>
    </div>
  )
}

export default Flowers

export async function getStaticProps() {

    const {flowers} =await  import('../../data/flowers.json')

    return {props: {flowers}}
}


