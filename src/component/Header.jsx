import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>Les célébrités pétées</h1>
            <nav>
                <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/celebritiespage"><li>Célébrités</li></Link>
                <Link to="/randompage"><li>Célébrité aléatoire</li></Link>
                </ul>
            </nav>
        </header>

    )
}

export default Header