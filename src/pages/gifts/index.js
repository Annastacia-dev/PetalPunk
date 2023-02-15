import Image from 'next/image'
import Link from 'next/link'

const Gifts = ({ gifts }) => {
  return (
    <section className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mt-32 ">
      {gifts.map((gift) => (
        <Link key={gift.id} className="flex flex-col justify-center items-center p-4"
        href={`/gifts/${gift.name}`}>
          <Image src={gift.image} alt={gift.name} width={200} height={300}
          className="rounded-lg shadow-lg sm:w-40 sm:h-40 object-cover transform transition-all duration-300 hover:scale-150"
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
           />
          <h2 className="text-sm text-center mt-3">{gift.name}
            <span className="text-xs ml-3 text-gray-500">${gift.price}</span>
          </h2>
        </Link>
      ))}
    </section>
  )
}

export default Gifts

export async function getStaticProps() {

    const {gifts} =await  import('../../data/gifts.json')

    return {props: {gifts}}
}


