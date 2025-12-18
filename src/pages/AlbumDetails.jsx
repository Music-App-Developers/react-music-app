import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AlbumDetails.css"
import { useAuth } from "../contexts/AuthContext";

function AlbumDetails() {
  const [album, setAlbum] = useState([]);
  const { albumId } = useParams();
  const navigate = useNavigate()
  const { user } = useAuth();

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
    <div className="album-container card">
      <h1 className="album-header">{albumDetail.album}</h1>
      <img className="album-cover" src={albumDetail.cover} alt={albumDetail.album} />
      <h2 className="album-artist">{albumDetail.artist}</h2>
      <h3 className="album-style">{albumDetail.style}</h3>
      <span className="album-year">{albumDetail.year}</span>
      <h2 className="tracklist-title"></h2>
      <ul className="tracklist">
        {albumDetail.tracklist
          .split(",")
          .map((track, index) => (
            <li className="track" key={index}>
              <span className="track-number">{index + 1}</span>
              <span className="track-name">{track}</span>
            </li>
          ))}
      </ul>

       {user && (
        <>
          <Link to={`/albums/edit/${albumId}`}>
            <button className="btn-action btn-edit">Edit your Album</button>
          </Link>
          <br />
          <button className="btn-action btn-delete" onClick={deleteAlbum}>Delete</button>
        </>
      )}
    </div>
  );
}

export default AlbumDetails;
