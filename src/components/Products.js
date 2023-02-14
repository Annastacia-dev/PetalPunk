import Image from 'next/image'

const products = [
    {
        id: 1,
        name: 'flowers',
        image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfDF8MHx8&auto=format&fit=crop&w=1400&q=60'
    },
    {
        id: 2,
        name: 'plants',
        image: 'https://images.unsplash.com/photo-1615800001716-c53dd05bf4b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kb29yJTIwcGxhbnRzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1400&q=60'

    },
    {
        id: 3,
        name: 'gifts',
        image: 'https://images.unsplash.com/photo-1575384043001-f37f48835528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lmdCUyMGJveHxlbnwwfDF8MHx8&auto=format&fit=crop&w=1400&q=60'
    }
]




const Products = () => {
  return (
    <div className="h-full">
            <div className="relative bg-rose-50 h-96">
                <div className='bg-[#f5d9e4]  absolute top-0 right-0 w-1/2 h-full'></div>
                <div className="top-0 absolute left-6 h-screen border-rose-600 mt-5 border-r-2 rose-border">
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-rose-600 uppercase text-2xl absolute -left-20 font-bold font-playfair -rotate-90  products-title tracking-wide">
                            our<span className='ml-5'>products</span>
                            </h1>
                    </div>
                </div>          
                <div className="grid absolute top-0 left-0 w-full h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto sm:px-10 sm:py-10 mt-16">
                    {
                        products.map((product) => (
                            <div className="flex justify-center" key={product.id}>
                                <div className="bg-white max-w-sm">
                                    <a href={`/${product.name}`}  data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <Image src={product.image} width={300} height={300} alt={product.name}
                                        className="transform transition-all duration-300 hover:scale-150"
                                        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                                        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                                        />
                                        <h5 className="text-gray-900 text-xl font-medium mb-2 p-6 capitalize">{product.name} &rarr;</h5>
                                    </a>
                                </div>
                            </div>
                        ))
                    }     
                </div>
            </div>
    </div>

  )
}

export default Products


