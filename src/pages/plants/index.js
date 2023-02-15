import Image from 'next/image'
import Link from 'next/link'

const Plants = ({ plants }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-32 ">
      {plants.map((plant) => (
        <Link key={plant.id} className="flex flex-col justify-center items-center p-4"
        href={`/plants/${plant.name}`}>
          <Image src={plant.image} alt={plant.name} width={200} height={300}
          className="rounded-lg shadow-lg sm:w-40 sm:h-40 object-cover transform transition-all duration-300 hover:scale-150"
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
           />
          <h2 className="text-sm text-center mt-3">{plant.name}
            <span className="text-xs ml-3 text-gray-500">${plant.price}</span>
          </h2>
        </Link>
      ))}
    </section>
  )
}

export default Plants

export async function getStaticProps() {

    const {plants} =await  import('../../data/plants.json')

    return {props: {plants}}
}


