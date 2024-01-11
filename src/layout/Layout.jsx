import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    
    </>
  )
}

export default Layout