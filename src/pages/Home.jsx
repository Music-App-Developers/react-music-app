import axios from "axios"
import { useState, useEffect } from "react"
import { Grid } from '@mantine/core'
import { Link } from "react-router-dom";



function Home() {

    const [album, setAlbum] = useState([])

    
    
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

    return (
        <div className="albums-grid">
        

        {album.map((element, i, arr) => {
        return (
          <div key={i} className="albums-card">
            <Link to = {`/album/${element.id}`}>
            <img className="imgCover" src={element.cover}/>
            </Link>
            <h3>{element.album}</h3>
            <h4>{element.artist}</h4>
            <p>{element.year}</p>
            

          </div>
        );
      })}
      </div>
    )
}
export default Home