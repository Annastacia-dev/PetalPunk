import Image from 'next/image'

const Products = () => {
  return (
    <div className="h-full">
            <div className="relative bg-rose-50 h-96">
                <div className="top-0 absolute left-6 h-full border-rose-600 border-r-2 products-line">
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-rose-600 uppercase text-2xl absolute sm:-left-10 font-medium font-playfair sm:-rotate-90 sm:top-15 products-title">
                            products
                            </h1>
                    </div>
                </div>          
                <div className="grid absolute top-0 left-0 w-full h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto sm:px-10 sm:py-10 mt-16">
                    <div class="flex justify-center">
                        <div class="bg-white max-w-sm">
                            <a href="/flowers" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <Image src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfDF8MHx8&auto=format&fit=crop&w=1400&q=60"
                                width={300} height={300} alt=""/>
                                <h5 class="text-gray-900 text-xl font-medium mb-2 p-6">Flowers &rarr;</h5>
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="bg-white max-w-sm">
                            <a href="/plants" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <Image src="https://images.unsplash.com/photo-1615800001716-c53dd05bf4b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kb29yJTIwcGxhbnRzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
                                width={300} height={300} alt=""/>
                                <h5 class="text-gray-900 text-xl font-medium mb-2 p-6">Plants &rarr;</h5>
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="bg-white max-w-sm">
                            <a href="/gifts" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <Image src="https://images.unsplash.com/photo-1575384043001-f37f48835528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lmdCUyMGJveHxlbnwwfDF8MHx8&auto=format&fit=crop&w=1400&q=60"
                                width={300} height={300} alt=""/>
                                <h5 class="text-gray-900 text-xl font-medium mb-2 p-6">Gifts &rarr;</h5>
                            </a>
                        </div>
                    </div>            
                </div>
            </div>
    </div>

  )
}

export default Products


