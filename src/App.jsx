
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"

export default function App() {
  return (
    <div>
      <BackgroundHeading/>
      <main>
            <Header/>
            <ItemList/>
            <Sidebar/>
            
                
      </main>
      <Footer/>
    </div>
  )
}
