import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AlbumDetails() {
  const [album, setAlbum] = useState([]);
  const { albumId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums.json")
      .then((response) => {
        if (!response.data) return;

        const albumsArray = Object.entries(response.data).map(
          ([id, album]) => ({
            id,
            ...album
          })
        );

        setAlbum(albumsArray);
      })
      .catch(console.error);
  }, []);

  const albumDetail = album.find(
    (albumObj) => albumObj.id === albumId
  );

  if (!albumDetail) {
    return <p>Cargando álbum...</p>;
  }
  

  const deleteAlbum = () => {
    axios.delete(`https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums/${albumId}.json`)
    .then((response) => {
        navigate("/")
    })
    .catch((error) => {
        console.log("error", error)
    })
  }



  return (
    <div>
      <h1>{albumDetail.album}</h1>
      <h2>{albumDetail.artist}</h2>
      <p>{albumDetail.year}</p>
      <img src={albumDetail.cover} alt={albumDetail.album} />
      <p>{albumDetail.tracklist}</p>
      <button>Edit your Album</button>
      <br />
      <button onClick={deleteAlbum}>Delete</button>
    </div>
  );
}

export default AlbumDetails;
