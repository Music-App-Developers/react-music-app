import AcerdaDe from "./pages/AcercaDe"
import AddYourAlbum from "./pages/AddYourAlbum"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import NavBar from "./pages/NavBar"
import { Route, Routes } from "react-router-dom"
import AlbumDetails from "./pages/AlbumDetails"
import EditAlbum from "./pages/EditAlbum"


function App() {


  return (
    <div className="app">

      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newalbum" element={<AddYourAlbum />} />
          <Route path="/acercade" element={<AcerdaDe />} />
          <Route path="/album/:albumId" element={<AlbumDetails />} />
          <Route path="/albums/edit/:albumId" element={<EditAlbum />} />


        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )

}

export default App
