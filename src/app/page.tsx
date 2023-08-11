import About from '@/components/About/About'
import Benefits from '@/components/Benefits/Benefits'
import Customers from '@/components/Customers/Customers'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Benefits />
      <Customers />
      <About />
      <Footer />
    </>
  )
}
