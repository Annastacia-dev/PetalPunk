import '@/styles/globals.css'
import MainComponentLayout from '@/components/MainComponentLayout'
import { CartProvider } from '@/contexts/cart'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <MainComponentLayout>
          <Component {...pageProps} /> 
      </MainComponentLayout>
    </CartProvider>
  )
}
