import Header from "./Header"
import Products from "./Products"
import About from "./About"
import FlowersCarousel from "./FlowersCarousel"

const PageLayout = ({ darkMode }) => {
  return (
    <>
        <Header darkMode={darkMode} />
        <Products />
        <About />
        <FlowersCarousel />
    </>
  )
}

export default PageLayout