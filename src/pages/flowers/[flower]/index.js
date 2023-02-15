import Image from 'next/image'

const Flower = ({ flower }) => {

  return (
    <section className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ml-20 ">
        <div className="flex flex-col justify-center items-center p-4">
        <Image src={flower.image} alt={flower.name} className="object-cover rounded-lg shadow-lg " width={500} height={300} />
        </div>
        <div className="flex flex-col col-span-2 justify-center items-center p-4">
        <h2 className="text-2xl text-center mt-3">{flower.name}
            <span className="text-sm ml-3 text-gray-500">${flower.price}</span>
        </h2>
        <p className="text-lg text-center mt-3">{flower.description}</p>
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

