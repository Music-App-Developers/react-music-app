import axios from "axios"
import { useState, useEffect } from "react"
import { Grid } from '@mantine/core'



function Home() {

    const [album, setAlbum] = useState([])
    
    useEffect(() => {
    axios
      .get('https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums.json')
      .then((response) => {
  console.log("DATA:", response.data)

  if (!response.data) {
    console.log("No hay datos en Firebase");
    return;
  }

  setAlbum(Object.values(response.data));
})
      .catch((error) => {
        console.log('oops, there was an error getting the list of users..');
        console.log(error);
      });
  }, []);

    return (
        <div className="albums-grid">
        

        {album.map((element, i, arr) => {
        return (
          <div key={i}>
            <img className="imgCover" src={element.cover}/>
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