import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({pageTitle}) => {
    return (
        <header>
            <h1>Les célébrités toutes pétées</h1>
            <nav>
                <ul>
                {pageTitle == "home" ? (
                <Link to="/"><li className="colormenu">Home</li></Link>
                ) : (
                <Link to="/"><li>Home</li></Link>)
                }
                {pageTitle == "celebrities" ? (
                <Link to="/celebritiespage"><li className="colormenu">Célébrités</li></Link>
                ) : (
                <Link to="/celebritiespage"><li>Célébrités</li></Link>)
                }
                {pageTitle == "random" ? (
                <Link to="/randompage"><li className="colormenu">Célébrité aléatoire</li></Link>
                ) : (
                <Link to="/randompage"><li>Célébrité aléatoire</li></Link>)
                }
                {pageTitle == "tvspeakers" ? (
                <Link to="/tvspeakerspage"><li className="colormenu">Présentateurs</li></Link>
                ) : (
                <Link to="/tvspeakerspage"><li>Présentateurs</li></Link>)
                }
                </ul>
            </nav>
        </header>

    )
}

export default Header