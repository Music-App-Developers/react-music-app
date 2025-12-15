import axios from "axios"
import { useState, useEffect } from "react"



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
        <div>
        <h1>Home</h1>

        {album.map((element, i, arr) => {
        return (
          <div key={i}>
            <h3>{element.artist}</h3>
            <p>{element.album}</p>
          </div>
        );
      })}
      </div>
    )
}
export default Home