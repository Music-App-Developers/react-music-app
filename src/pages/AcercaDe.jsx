import "../pages/AboutPage.css"
import logo from "../images/albumory-logo.png"


function AcerdaDe() {
    return (
        <div className="about-container">
            <p>Albumory es una aplicación diseñada para los amantes de la música que desean organizar, descubrir y conservar sus álbumes favoritos en un solo lugar. La plataforma permite a los usuarios crear una biblioteca musical personalizada, añadir álbumes de forma sencilla y mantener un registro claro de sus preferencias a lo largo del tiempo.

                Con una interfaz intuitiva y un enfoque centrado en la experiencia del usuario, Albumory facilita la exploración de colecciones personales, el orden por artistas, géneros o fechas, y la construcción de un archivo musical que refleja la identidad de cada oyente. Ideal tanto para oyentes casuales como para melómanos exigentes, Albumory transforma la forma de gestionar y disfrutar la música, poniendo cada álbum favorito al alcance de la mano.
            </p>

            <div>
                <h3 className="about-title"> WebDevs:</h3>
                <a className="about-subtitle" href="https://github.com/GeX90">Jorge Jiménez Morgado</a>
            <br />
            <a className="about-subtitle" href="https://github.com/PauSerranoHerraiz">Pau Serrano Herráiz</a>
        </div>
        <div>
            <img className = "logo"src={logo} alt="" />
        </div>
        </div>

    )
}
export default AcerdaDe