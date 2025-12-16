import axios from "axios"

const albumsArr = [
  {
    "artist": "Robe",
    "album": "Mayéutica",
    "year": 2021,
    "tracklist": "Interludio, Primer Movimiento: Después de la Catarsis, Segundo Movimiento: Mierda de Filosofía, Tercer Movimiento: Un instante de luz, Cuarto Movimiento: Yo no soy el dueño de mis emociones, Coda Feliz",
    "cover": "https://www.librerialaesquinadelzorro.com/wp-content/uploads/2021/05/Robe_Mayeutica.jpg"
  },
  {
    "artist": "Robe",
    "album": "Se nos lleva el Aire",
    "year": 2023,
    "tracklist": "El hombre pájaro, Viajando por el interior, Nada que perder, A la orilla del río, El poder del Arte, Haz que tiemble el suelo, Puntos Suspensivos, Ininteligible, Adiós cielo azul, llegó la tormenta, Esto no está pasando",
    "cover": "https://rocksesion.com/wp-content/uploads/2023/12/robe-se-nos-lleva-el-aire-rocksesion.jpg"
  },
  {
    "artist": "Robe",
    "album": "Lo que Aletea en nuestras cabezas",
    "year": 2015,
    "tracklist": "Un suspiro acompasado, Y rozar contigo, Nana Cruel, De manera Urgente, Por ser un pervertido, Ruptura Leve, Guerrero, Contra Todos",
    "cover": "https://rocksesion.com/wp-content/uploads/2015/06/215-robe-lo-que-aletea-en-nuestras-cabezas.jpg"
  },
  {
    "artist": "Robe",
    "album": "Destrozares, canciones para el final del los tiempos",
    "year": 2016,
    "tracklist": "Hoy al mundo renuncio, El cielo cambió de forma, Querré lo prohibido, Cartas desde Gaia, Del tiempo perdido, Por encima del Bien y del Mal, Donde se rompen las Olas, Puta Humanidad, La Canción más Triste, Destrozares",
    "cover": "https://rocksesion.com/wp-content/uploads/2016/11/robe-destrozares.jpg?w=800&h=800"
  },
  {
    "artist": "Robe",
    "album": "Bienvenidos al Temporal",
    "year": 2018,
    "tracklist": "El Cielo cambió de forma, Hoy al mundo renuncio, Por ser un pervertido, Donde se rompen las Olas, Querré lo prohibido, Ruptura Leve, Nana Cruel, Destrozares, Guerrero, La canción más triste",
    "cover": "https://robe.es/gestor/recursos/uploads/Bienvenidos-Al-Temporal-600x600.jpg"
  },
  {
    "artist": "Robe",
    "album": "Bienvenidos al Temporal: Parte 2",
    "year": 2018,
    "tracklist": "Cartas desde Gaia, De manera Urgente, Puta Humanidad, Del tiempo perdido, Contra Todos, Y rozar contigo, Por encima del Bien y del Mal, Si te vas, Un suspiro acompasado",
    "cover": "https://robe.es/gestor/recursos/uploads/Bienvenidos-Al-Temporal-600x600.jpg"
  }
]

const BASE_URL = "https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app"


albumsArr.forEach((albumDetails, i) => {
  axios.post(`${BASE_URL}/albums.json`, albumDetails)
    .then( response => console.log(`Resource ${i} created`))
    .catch( e => console.log(`Error: `, e))
})

