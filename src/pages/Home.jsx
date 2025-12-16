import axios from "axios"
import { useState, useEffect } from "react"
import { Grid } from '@mantine/core'
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';



function Home() {

  const [album, setAlbum] = useState([])



  useEffect(() => {
    axios
      .get("https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app/albums.json")
      .then((response) => {
        if (!response.data) {
          setAlbum([]);
          return;
        }

        setAlbum(
          Object.entries(response.data).map(([id, album]) => ({
            id,
            ...album
          }))
        );
      })
      .catch(console.error);
  }, []);



  if (album.length === 0) {
    return <Loader />;
  }



  return (
    <div className="albums-grid">


      {album.map((element, i, arr) => {
        return (

          <div key={i} className="albums-card imgCover">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image 
                  src={element.cover}
                  height={500}
                  alt="Cover"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{element.artist}</Text>
                <Text fw={400}>{element.album}</Text>

              </Group>

              <Text size="sm" c="dimmed">
                {element.year}
              </Text>
              <Link to={`/album/${element.id}`}>
                <Button color="orange" fullWidth mt="md" radius="md">
                  Details
                </Button>
              </Link>
            </Card>
          </div>
        );
      })}
    </div>
  )
}
export default Home