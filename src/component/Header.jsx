import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({pageTitle}) => {
    return (
        <header>
            <h1>Les célébrités toutes pétées</h1>
            <nav>
                <ul>
                {pageTitle == "home" ? (
                <strong>
                <Link to="/"><li>Home</li></Link>
                </strong>) : (
                <Link to="/"><li>Home</li></Link>)
                }
                {pageTitle == "celebrities" ? (
                <strong>
                <Link to="/celebritiespage"><li>Célébrités</li></Link>
                </strong>) : (
                <Link to="/celebritiespage"><li>Célébrités</li></Link>)
                }
                {pageTitle == "random" ? (
                <strong>
                <Link to="/randompage"><li>Célébrité aléatoire</li></Link>
                </strong>) : (
                <Link to="/randompage"><li>Célébrité aléatoire</li></Link>)
                }
                
                </ul>
            </nav>
        </header>

    )
}

export default Header