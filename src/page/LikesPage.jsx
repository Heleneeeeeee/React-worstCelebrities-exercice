import { useState } from "react";
import "./HomePage.scss";

const LikesPage = () => {

    const [likes, setLikes] = useState (0)
    const [displayMessage, setDisplayMessage] = useState(false)

    const handleLikesClick = () => {
        if (likes < 5){
        setLikes(likes + 1);
        } else {
            setDisplayMessage(true)
        }
    }
    const handleclosemessage = () => {
        setDisplayMessage(false)

    }

    
    return (
        <main>
            
            {displayMessage == true && 
            <div>
            <p>Vous ne pouvez plus liker</p>
            <button onClick={handleclosemessage}>Fermer</button>
            </div>
            }
            
            <button onClick={handleLikesClick}>Like</button>
            <p>Vous avez cliqué {likes} fois</p>
        </main>
    )
}

export default LikesPage;

// Le hook useState permet de déclarer une variable initiale avec une fonction qui va modifier son état
//setLikes ré-exécute la fonction et l'incrémente de 1 dans la variable handleLikesClick
// Après chaque click,  la valeur de la variable est affichée dans la balise <p>

