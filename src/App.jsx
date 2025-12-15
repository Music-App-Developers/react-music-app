import AcerdaDe from "./pages/AcercaDe"
import AddYourAlbum from "./pages/AddYourAlbum"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import NavBar from "./pages/navBar"
import { Route, Routes } from "react-router-dom"
import AlbumDetails from "./pages/AlbumDetails"


function App() {


  return (
    <>
    
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/newalbum" element = {<AddYourAlbum/>}/>
        <Route path = "/acercade" element = {<AcerdaDe/>}/>
        <Route path="/album/:albumId" element={<AlbumDetails  />} />

      </Routes>


      <footer>
        <Footer />
      </footer>
    </>
  )

}

export default App
