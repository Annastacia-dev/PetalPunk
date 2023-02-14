import Image from 'next/image'

const Gifts = ({ gifts }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ">
      {gifts.map((gift) => (
        <div key={gift.id} className="flex flex-col justify-center items-center p-4">
          <Image src={gift.image} alt={gift.name} width={200} height={300}
          className="rounded-lg shadow-lg w-40 h-40 object-cover"
           />
          <h2 className="text-md text-center mt-3">{gift.name}
            <span className="text-sm ml-3 text-gray-500">${gift.price}</span>
          </h2>
        </div>
      ))}
    </section>
  )
}

export default Gifts

export async function getStaticProps() {

    const {gifts} =await  import('../../data/gifts.json')

    return {props: {gifts}}
}


