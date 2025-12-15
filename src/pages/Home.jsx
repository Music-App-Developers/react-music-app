import axios from "axios"
import { useState, useEffect } from "react"
import { Grid } from '@mantine/core'
import { Link } from "react-router-dom";
import Loader from "../components/Loader";



function Home() {

    const [album, setAlbum] = useState(null)

    
    
    useEffect(() => {
  axios
    .get("https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums.json")
    .then((response) => {
      if (!response.data) return;

      setAlbum(
        Object.entries(response.data).map(([id, album]) => ({
          id,
          ...album
        }))
      );
    })
    .catch(console.error);
}, []);


    if (album === null) {
        return <Loader/>
    }


    return (
        <div className="albums-grid">
        

        {album.map((element, i, arr) => {
        return (
          <div key={i} className="albums-card">
            <Link to = {`/album/${element.id}`}>
            <img className="imgCover" src={element.cover}/>
            
            <h3>{element.album}</h3>
            <h4>{element.artist}</h4>
            <p>{element.year}</p>
            </Link>

          </div>
        );
      })}
      </div>
    )
}
export default Home