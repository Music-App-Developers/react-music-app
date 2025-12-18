import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import "./Form.css"




function EditAlbum() {

    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [year, setYear] = useState("")
    const [style, setStyle] = useState("")
    const [cover, setCover] = useState("")
    const [tracklist, setTracklist] = useState("")

    const { albumId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums/${albumId}.json`)
            .then((response) => {
                setAlbum(response.data.album)
                setArtist(response.data.artist)
                setCover(response.data.cover)
                setYear(response.data.year)
                setStyle(response.data.style)
                setTracklist(response.data.tracklist)

            })
            .catch((error) => {
                return (error)
            })
    }, [albumId] )


    const handleSubmit = (e) => {
        e.preventDefault()
        const newDetails = {
            album: album,
            artist: artist,
            year: year,
            style: style,
            cover: cover,
            tracklist: tracklist
        }

        axios.patch(`https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums/${albumId}.json`, newDetails)
            .then((response) => {
                navigate(`/album/${albumId}`)
            })
            .catch((error) => {
                console.log("error", error)
            })

    }



    return (
        <form className="body" onSubmit={handleSubmit}>
            <h2 className="form">Edit album</h2>
            <div className="music-form-group">
            <label>Album: <br />
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
            <label>Artist: <br />
                <input
                    type="text"
                    name="artist"
                    placeholder="Artist"
                    required
                    value={artist}
                    onChange={(e) => { setArtist(e.target.value) }}
                />
            </label>
            <br />
            <label>Year: <br />
                <input
                    type="number"
                    name="Year"
                    placeholder="Album Year"
                    required
                    value={year}
                    onChange={(e) => { setYear(e.target.value) }}
                />
            </label>
            <br />
            <label>Style: <br />
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
            <label>Cover Img <br />
                <input
                    type="url"
                    name="cover"
                    placeholder="Image URL"

                    value={cover}
                    onChange={(e) => { setCover(e.target.value) }}
                />
            </label>
            <br />
            <label>Album tracks (separate the tracks with commas): <br />
                <input
                    type="text"
                    name="tracklist"
                    placeholder="Album tracks"

                    value={tracklist}
                    onChange={(e) => { setTracklist(e.target.value) }}
                />
            </label>
            </div>
            <br />
            <button className="music-form-button">Edit</button>
        </form>
    )
}

export default EditAlbum