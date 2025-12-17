import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Form.css";


function AddYourAlbum() {

    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [year, setYear] = useState("")
    const [style, setStyle] = useState("")
    const [cover, setCover] = useState("")
    const [tracklist, setTracklist] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const newAlbum = {
            album: album,
            artist: artist,
            year: year,
            style, style,
            cover: cover,
            tracklist: tracklist
        }

        axios.post("https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums.json", newAlbum)
            .then((response) => {
                navigate("/")
            })
            .catch((error) => {
                console.log("error", error)
            })

    }



    return (
        <form className="body" onSubmit={handleSubmit}>
            <h2 className="form">Add album</h2>
            <div className="music-form-group">
                <label>
                    <input
                        type="text"
                        name="album"
                        placeholder="Album"
                        required
                        value={album}
                        onChange={(e) => { setAlbum(e.target.value) }}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        name="artist"
                        placeholder="Album Artist"
                        required
                        value={artist}
                        onChange={(e) => { setArtist(e.target.value) }}
                    />
                </label>
                 <br />
                <label>
                    <input
                        type="text"
                        name="style"
                        placeholder="Music Style"
                        required
                        value={style}
                        onChange={(e) => { setStyle(e.target.value) }}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="number"
                        name="Year"
                        placeholder="Album Year"
                        min={1940}
                        max={2030}
                        required
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="url"
                        name="cover"
                        placeholder="Image Url"

                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </label>
                <br />
                <label>
                    <textarea
                        type="text"
                        name="tracklist"
                        placeholder="Album Tracks"

                        value={tracklist}
                        onChange={(e) => { setTracklist(e.target.value) }}
                    />
                </label>
            </div>
            <button className="music-form-button">Create</button>
        </form>
    )
}
export default AddYourAlbum