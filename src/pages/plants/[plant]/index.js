import Image from 'next/image'

const Plant = ({ plant }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-32 ml-20 ">
        <Image src={plant.image} alt={plant.name} className="object-cover rounded-lg shadow-lg " width={500} height={300} />
        <div className="flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl text-center mt-3">{plant.name}
            <span className="text-sm ml-3 text-gray-500">${plant.price}</span>
        </h2>
        <p className="text-lg text-center mt-3">{plant.description}</p>
        </div>
    </section>
  )
}

export default Plant

export async function getStaticPaths() {
    const {plants} = await import('../../../data/plants.json')
    const paths = plants.map((plant) => ({
        params: {plant: plant.name}
    }))
    return {paths, fallback: false}
    }

export async function getStaticProps({ params }) {
    const {plants} = await import('../../../data/plants.json')
    const plant = plants.find((plant) => plant.name === params.plant)
    return {props: {plant}}
}

