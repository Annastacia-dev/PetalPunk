import '@/styles/globals.css'
import MainComponentLayout from '@/components/MainComponentLayout'
import { CartProvider } from '@/contexts/cart'
import { DarkModeProvider } from '@/contexts/dark'

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <CartProvider>
        <MainComponentLayout>
            <Component {...pageProps} /> 
        </MainComponentLayout>
      </CartProvider>
    </DarkModeProvider>
  )
}
