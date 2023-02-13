import Image from 'next/image'

const About = () => {
  return (
    <div className='relative about bg-rose-50/20'>
        <div className='sm:grid grid-cols-3  mx-auto sm:px-10 sm:py-10'>
            <div className='col-span-2'>
                <Image src='/images/about.jpg' width={900} height={900}
                className='-ml-9'
                 alt='about'/>
            </div>
            <div className='col-span-1'>
                <div className='flex flex-col justify-center items-center sm:mt-14 sm:-ml-2'>
                    <h1 className='text-2xl font-bold font-playfair mt-5 text-rose-600 uppercase'>About Us</h1>
                    <p className='text-gray-800 ml-5 text-sm mt-3 leading-10'>
                        We are a small, family owned botanical boutique located in Nairobi, Kenya. We specialize in creating unique, one of a kind floral arrangements for all occasions. We are passionate about our work and strive to create the most beautiful, unique arrangements for our clients. We are committed to providing the highest quality flowers and service to our clients. We are proud to be a part of the Nairobi community and look forward to serving you.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About