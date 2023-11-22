import { useState } from "react"


const CopyrightPage = () =>{
    const [displayText, setDisplayText] = useState (true);
    // Le "useState" permet de faire passer une variable avec un état depart et une fonction qui va modifier son état et le recharger

    const handleButtonClick = () => {
        setDisplayText (false)
    };

    return (
        <main>
            {displayText &&  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>}
            <button onClick={handleButtonClick}>Cacher le texte</button>
        </main>
    )
}

export default CopyrightPage;




// Explications de David:
//Je modifie la valeur de displayText au click et recharger mon composant en conservant la valeur de displayText
//useState permet de créer une variable dans une sorte de BDD pour composant
//il prend en parametre une valeur par defaut pour cette variable
//Au premier chargement du composant il utilise la valeur par défaut
//mais aux changements suivant, il utilisera la valeur issue de
// use state retourne 2 choses: la valuer de la variable displayText
//et une fonction qui permet de modifier cette valeur et qui ent