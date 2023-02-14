import Image from 'next/image'

const Footer = () => {
  return (
    <div className='contacts'>
     <div className="flex items-center h-28 mt-10 mb-10" id="contact">
      <div className="w-1/4 h-1 bg-rose-500 rounded-full mr-4"></div>
      <div className="w-10 h-10 -ml-5 bg-rose-500 rounded-full mr-4"></div>
      <div className="text-rose-600 font-playfair font-bold text-3xl uppercase">Reach out</div>
    </div>

    <footer className="bg-rose-800 h-full relative mt-18">
        <div className="sm:grid grid-cols-4 gap-4 mx-auto sm:px-10 sm:py-10 footer-grids">
            <div className="sm:col-span-1 border-white border-r-2 flex gap-3 flex-column justify-center items-center">
                <Image src="/images/whitelogo.png" width={30} height={30} alt='logo' className='mt-3 ml-3'
                 />
                <h1 className="text-white mt-3 text-1xl font-bold">Waridi</h1> 
            </div>  
            <div className="sm:col-span-1 border-white border-r-2 ml-16 sm:ml-0 flex flex-col justify-center items-center gap-3">   
                <div className='mt-3'>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl  uppercase font-bold">contact us</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <i className="fas fa-map-marker-alt text-white text-1xl"></i>
                        <p className="text-white text-1xl">Nairobi, Kenya</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <i className="fas fa-phone-alt text-white text-1xl"></i>
                        <p className="text-white text-1xl">+254 700 000 000</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                    <i className="fas fa-envelope text-white text-1xl"></i>
                        <p className="text-white text-1xl">
                            <a href="mailto:waridi@info.io ">waridi@info.io</a>
                        </p>
                    </div>  
                </div>      
            </div>
            <div className="sm:col-span-1 border-white border-r-2 flex flex-column justify-center items-center gap-3">   
                <div className='mt-3'>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl uppercase font-bold">store</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl">Affiliate</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl">Best Sellers</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl">Discounts</p>
                    </div> 
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl">Gift Cards</p>
                    </div> 
                </div>      
            </div>
            <div className="sm:col-span-1 ml-16 sm:ml-0 flex flex-column justify-center items-center gap-3 capitalize">   
                <div className='mt-3'>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl uppercase font-bold">links</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl">privacy policy</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl">terms &amp; conditions</p>
                    </div>
                    <div className="flex flex-row gap-3 mt-3">
                        <p className="text-white text-1xl">return policy</p>
                    </div>
                   
                </div>      
            </div>
            
            
        </div>
        <div className='flex justify-center gap-5 items-center mt-5  mx-auto'>
            <a href="https://www.facebook.com/waridiflorist/" target="_blank" rel="noreferrer"
            className='sm:h-10 sm:w-10 bg-white rounded-full flex justify-center items-center mt-5 mb-5'>
                <i className="fab fa-facebook-f text-rose-800 text-2xl mx-2"></i>
            </a>
            <a href="https://www.instagram.com/waridiflorist/" target="_blank" rel="noreferrer"
            className='h-10 w-10 bg-white rounded-full flex justify-center items-center mt-5 mb-5'>
                <i className="fab fa-instagram text-rose-800 text-2xl mx-2"></i>
            </a>
            <a href="https://twitter.com/waridiflorist" target="_blank" rel="noreferrer"
            className='h-10 w-10 bg-white rounded-full flex justify-center items-center mt-5 mb-5'>
                <i className="fab fa-twitter text-rose-800 text-2xl mx-2"></i>
            </a>
            <a href="https://www.linkedin.com/company/waridi-florist/" target="_blank" rel="noreferrer"
            className='h-10 w-10 bg-white rounded-full flex justify-center items-center mt-5 mb-5'>
                <i className="fab fa-linkedin-in text-rose-800 text-2xl mx-2"></i>
            </a>
            <a href="https://pinterest.com/waridiflorist/" target="_blank" rel="noreferrer"
            className='h-10 w-10 bg-white rounded-full flex justify-center items-center mt-5 mb-5'>
                <i className="fab fa-pinterest-p text-rose-800 text-2xl mx-2"></i>
            </a>
        </div>
        <div className=' flex justify-center items-center mt-5'>
            <p className="text-white text-sm">
            ©{new Date().getFullYear()} Waridi. All rights reserved.
            </p>
        </div>
        
    </footer>
    </div>
  )
}

export default Footer