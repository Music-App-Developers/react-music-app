import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function AddYourAlbum() {

    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [year, setYear] = useState("")
    const [cover, setCover] = useState("")
    const [tracklist, setTracklist] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const newAlbum = {
            album: album,
            artist: artist,
            year: year,
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
        <form onSubmit={handleSubmit}>
            <label>
                Album:
                <input
                    type="text"
                    name="album"
                    placeholder="Enter your Album"
                    required
                    value={album}
                    onChange={(e) => { setAlbum(e.target.value) }}
                />
            </label>
            <br />
            <label>
                Artist:
                <input
                    type="text"
                    name="artist"
                    placeholder="Enter your Artist"
                    required
                    value={artist}
                    onChange={(e) => { setArtist(e.target.value) }}
                />
            </label>
            <br />
            <label>
                Year:
                <input
                    type="number"
                    name="Year"
                    placeholder="Enter Year"
                    required
                    value={year}
                    onChange={(e) => { setYear(e.target.value) }}
                />
            </label>
            <br />
            <label>
                Cover:
                <input
                    type="url"
                    name="cover"
                    placeholder="Enter your img"
                    
                    value={cover}
                    onChange={(e) => { setCover(e.target.value) }}
                />
            </label>
            <br />
            <label>
                Tracklist:
                <input
                    type="text"
                    name="tracklist"
                    placeholder="Enter your tracks"
                    
                    value={tracklist}
                    onChange={(e) => { setTracklist(e.target.value) }}
                />
            </label>
            <br />
            <button>Create</button>
                </form>
    )
}
export default AddYourAlbum