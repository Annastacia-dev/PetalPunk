import Image from 'next/image'
import Link from 'next/link'

const Flowers = ({ flowers }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ">
      {flowers.map((flower) => (
        <Link key={flower.id} className="flex  flex-col justify-center items-center p-4" href={`/flowers/${flower.name}`}>
          <Image src={flower.image} alt={flower.name} width={200} height={300}
          className="rounded-lg shadow-lg w-40 h-40 object-cover"
           />
          <h2 className="text-md text-center mt-3">{flower.name}
            <span className="text-sm ml-3 text-gray-500">${flower.price}</span>
          </h2>
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


