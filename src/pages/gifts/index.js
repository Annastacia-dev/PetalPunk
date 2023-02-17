import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Gifts = ({ gifts }) => {

    const [price, setPrice] = useState(200)

    const handleChange = (e) => {
        setPrice(e.target.value)
    }

    const filteredGifts = gifts.filter((gift) => gift.price <= price)
  
    // search by name,description

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const reFilteredgifts = filteredGifts.filter((gift) => gift.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='mt-28 '>
      <div className="flex flex-col justify-center items-center p-4">
        <input type="text" value={search} onChange={handleSearch} className="border-b-2 border-rose-600 mt-3 focus:outline-none focus:border-rose-600 rounded-b-xs text-sm relative text-center bg-transparent" placeholder='Search by name ' />
        <i className="fas fa-search absolute text-rose-600 mt-2 ml-48"
        onClick={handleSearch}
        ></i>
      </div>
     <div className="flex flex-col ml-4 justify-center items-start p-4">
        <h2 className="text-sm text-center mt-3">Filter by price ${price}</h2>
        <input type="range" min="10" max="200" value={price} onChange={handleChange} className="w-50 bg-rose-300 mt-3 rounded-full appearance-none outline-none overflow-hidden" />
      </div>
    <section
     className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6  ">
      {reFilteredgifts && reFilteredgifts.length > 0 ? reFilteredgifts.map((gift) => (
        <Link key={gift.id} className="flex  flex-col justify-center items-center p-4" href={`/gifts/${gift.name}`}>
          <Image src={gift.image} alt={gift.name} width={200} height={200}
          className="rounded-lg shadow-lg w-40 h-40 object-cover transform transition-all duration-300 hover:scale-150"
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
          <h2 className="text-sm text-center mt-3">{gift.name}</h2>
          <p className="text-xs ml-3 text-gray-500">${gift.price}</p>
        </Link>
      ) ) : (
          <div className="flex col-span-6 flex-row gap-2 justify-center items-center p-4">
            <Image src="/images/gift.png" alt="gifts" width={175} height={200} />
            <h2 className="text-2xl font-playfair font-bold text-rose-600 text-center mt-3">No gifts found</h2>
          </div>
      )}
    </section>
    </div>
  )
}

export default Gifts

export async function getStaticProps() {

    const {gifts} =await  import('../../data/gifts.json')

    return {props: {gifts}}
}


