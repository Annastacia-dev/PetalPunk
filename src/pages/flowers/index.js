import Image from 'next/image'
import Link from 'next/link'

const Flowers = ({ flowers }) => {

  // filter by price
  




  return (
    <section className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6  mt-32 ">
      {flowers.map((flower) => (
        <Link key={flower.id} className="flex  flex-col justify-center items-center p-4" href={`/flowers/${flower.name}`}>
          <Image src={flower.image} alt={flower.name} width={200} height={200}
          className="rounded-lg shadow-lg sm:w-40 sm:h-40 object-cover transform transition-all duration-300 hover:scale-150"
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
          <h2 className="text-sm text-center mt-3">{flower.name}</h2>
          <p className="text-xs ml-3 text-gray-500">${flower.price}</p>
        </Link>
      ))}
    </section>
  )
}

export default Flowers

export async function getStaticProps() {

    const {flowers} =await  import('../../data/flowers.json')

    return {props: {flowers}}
}


