import AcerdaDe from "./pages/AcercaDe"
import AddYourAlbum from "./pages/AddYourAlbum"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import NavBar from "./pages/NavBar"
import { Route, Routes } from "react-router-dom"
import AlbumDetails from "./pages/AlbumDetails"
import EditAlbum from "./pages/EditAlbum"
import { useState } from "react"


function App() {

  const [search, setSearch] = useState("")

  return (
    <div className="app">

      <NavBar search={search} setSearch={setSearch}/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/newalbum" element={<AddYourAlbum />} />
          <Route path="/acercade" element={<AcerdaDe />} />
          <Route path="/album/:albumId" element={<AlbumDetails />} />
          <Route path="/albums/edit/:albumId" element={<EditAlbum />} />


        </Routes>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )

}

export default App
