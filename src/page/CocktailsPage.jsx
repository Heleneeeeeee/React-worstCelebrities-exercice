const CocktailsPage = () => {
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response)=>{
        return (
            response.json())
    })
    .then ((json)=>{
    console.log(json)
    })

    return (
        <h1>Cocktails</h1>
    )

}

export default CocktailsPage;

// J'utilise la fonction fetch afin de récupérer les données json de mon api. Comme c'est une fonction asynchrone, le then me permet d'attendre la réponse et ensuite de me renvoyer le fichier json