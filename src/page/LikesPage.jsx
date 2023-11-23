import { useState } from "react";

const LikesPage = () => {

    const [likes, setLikes] = useState (0)

    const handleLikesClick = () => {
        setLikes(likes+1)
    }

    
    return (
        <main>
            <button onClick={handleLikesClick}>Like</button>
            <p>Vous avez cliqueé {likes} fois</p>
        </main>
    )
}

export default LikesPage;

// Le hook useState permet de déclarer une variable initiale avec une fonction qui va modifier son état
//setLikes ré-exécute la fonction et l'incrémente de 1 dans la variable handleLikesClick
// Après chaque click,  la valeur de la variable est affichée dans la balise <p>