import '@/styles/globals.css'
import MainComponentLayout from '@/components/MainComponentLayout'
import { CartProvider } from '@/contexts/cart'

export default function App({ Component, pageProps }) {
  return (
    <MainComponentLayout>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </MainComponentLayout>
  )
}
