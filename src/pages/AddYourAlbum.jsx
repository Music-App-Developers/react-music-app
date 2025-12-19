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
                <label>Album: <br />
                    <input
                        type="text"
                        name="album"
                        placeholder="Abbey Road"
                        required
                        value={album}
                        onChange={(e) => { setAlbum(e.target.value) }}
                    />
                </label>
                <br />
                <label>Artist: <br />
                    <input
                        type="text"
                        name="artist"
                        placeholder="The Beatles"
                        required
                        value={artist}
                        onChange={(e) => { setArtist(e.target.value) }}
                    />
                </label>
                 <br />
                <label>Style: <br />
                    <input
                        type="text"
                        name="Rock"
                        placeholder="Rock"
                        required
                        value={style}
                        onChange={(e) => { setStyle(e.target.value) }}
                    />
                </label>
                <br />
                <label>Year: <br />
                    <input
                        type="number"
                        name="Year"
                        placeholder="1969"
                        min={1940}
                        max={2030}
                        required
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </label>
                <br />
                <label>Cover Img: <br />
                    <input
                        type="url"
                        name="cover"
                        placeholder="http://imageURLexample.com/abbeyroad.jpg"

                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </label>
                <br />
                <label>Album tracks (separate the tracks with commas): <br />
                    <textarea
                        type="text"
                        name="tracklist"
                        placeholder="Come Together, Something, Maxwell’s Silver Hammer, Oh! Darling, Octopus’s Garden, I Want You (She’s So Heavy), Here Comes the Sun, Because, You Never Give Me Your Money, Sun King, Mean Mr. Mustard, Polythene Pam, She Came In Through the Bathroom Window, Golden Slumbers, Carry That Weight, The End, Her Majesty"

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