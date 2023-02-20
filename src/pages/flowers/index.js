import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePageTitle } from '../../custom/title'

const Flowers = ({ flowers }) => {

    usePageTitle()

    const [price, setPrice] = useState(100)

    const handleChange = (e) => {
        setPrice(e.target.value)
    }

    const filteredFlowers = flowers.filter((flower) => flower.price <= price)
    


    // search by name,description

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const reFilteredFlowers = filteredFlowers.filter((flower) => flower.name.toLowerCase().includes(search.toLowerCase()))

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
        <input type="range" min="15" max="100" value={price} onChange={handleChange} className="w-50 bg-rose-300 mt-3 rounded-full appearance-none outline-none overflow-hidden" />
      </div>
    <section
     className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6  ">
      {reFilteredFlowers && reFilteredFlowers.length > 0 ? reFilteredFlowers.map((flower) => (
        <Link key={flower.id} className="flex  flex-col justify-center items-center p-4" href={`/flowers/${flower.name}`}>
          <Image src={flower.image} alt={flower.name} width={200} height={200}
          className="rounded-lg shadow-lg w-40 h-40 object-cover transform transition-all duration-300 hover:scale-150"
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
          <h2 className="text-sm text-center mt-3">{flower.name}</h2>
          <p className="text-xs ml-3 text-gray-500">${flower.price}</p>
        </Link>
      ) ) : (
          <div className="flex col-span-6 flex-row gap-2 justify-center items-center p-4">
            <Image src="/images/flower.png" alt="Flowers" width={200} height={200} />
            <h2 className="text-2xl font-playfair font-bold text-rose-600 text-center mt-3">No flowers found</h2>
          </div>
      )}
    </section>
    </div>
  )
}

export default Flowers

export async function getStaticProps() {

    const {flowers} =await  import('../../data/flowers.json')

    return {props: {flowers}}
}


