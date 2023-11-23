import { useState } from "react";

const CocktailsPage = () => {

    const [cocktails, setCocktails] = useState (null)

    if (!cocktails){
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response)=>{
        return (
            response.json())
    })
    .then ((cocktailsInjson)=>{
    setCocktails(cocktailsInjson.drinks)
    })
}

    return (
        <main>
        {cocktails? (
        <>
        {cocktails.map((cocktail)=>{
            return (
            <article>
            <h2>{cocktail.strDrink}</h2>
            </article>
            );
            })}
        </>
        ):(
            <p>Cocktails en cours de chargement</p>
        )}
        </main>
    )
}

    
    

 
export default CocktailsPage;

// J'utilise la fonction fetch afin de récupérer les données json de mon api. Comme c'est une fonction asynchrone, le then me permet d'attendre la réponse et ensuite de me renvoyer le fichier json.
// J'utilise le hook useState afin de donner à ma variable la valeure initiale de null et la fonction setcocktails va modifier son état.
//Du coup,si la variable est nul, j'affiche dans ma page Cocktails en cours de chargement et le composant va continuer à se recharger
// Si le serveur a réussi à récupérer les données, j'affiche "Cocktails prêts" et le composant ne se rechargera plus
//Dans mon return, j'utilise la fonction map afin de récupérer le tableau json et j'affiche cocktail.strDrink qui est le nom de mes cocktails