import AcerdaDe from "./pages/AcercaDe"
import AddYourAlbum from "./pages/AddYourAlbum"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import NavBar from "./pages/NavBar"
import { Route, Routes, Navigate } from "react-router-dom"
import AlbumDetails from "./pages/AlbumDetails"
import EditAlbum from "./pages/EditAlbum"
import { useState } from "react"

import LogIn from "./components/LogIn"
import { useAuth } from "./contexts/AuthContext"
function App() {


  const [search, setSearch] = useState("");
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="app">

      <NavBar search={search} setSearch={setSearch} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/newalbum" element={user ? <AddYourAlbum /> : <Navigate to="/login" />} />
          <Route path="/acercade" element={<AcerdaDe />} />
          <Route path="/album/:albumId" element={<AlbumDetails />} />
          <Route path="/albums/edit/:albumId" element={user ? <EditAlbum /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LogIn />} />


        </Routes>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )

}

export default App
