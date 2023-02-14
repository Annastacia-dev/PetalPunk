import Image from 'next/image'

const Gift = ({ gift }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ml-20 ">
        <Image src={gift.image} alt={gift.name} className="object-cover rounded-lg shadow-lg " width={500} height={300} />
        <div className="flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl text-center mt-3">{gift.name}
            <span className="text-sm ml-3 text-gray-500">${gift.price}</span>
        </h2>
        <p className="text-lg text-center mt-3">{gift.description}</p>
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

