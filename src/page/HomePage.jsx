import { shittyStars } from "../utils/celebrities-utils";
import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header";
import Footer from "../component/Footer";

const HomePage = () => {

    const shittyStarsSortedByDate = shittyStars.sort((starA, starB) => new Date(starA.publishedAt) - new Date (starB.publishedAt))
    
    const theLastFiveCelebritiesPublished = shittyStarsSortedByDate.slice(-5)
    

    const CelebritiesPickedByTeam = shittyStars.filter((star) =>{
        return (star.isPickedByTeam === true)
    })

    const theLastThreeCelebritiesPickedByTeam = CelebritiesPickedByTeam.slice(-3)
    
    return (
        <>
        <main>
            <Header />
            <section>
                <h2>Les 5 célebritées publiées le plus récemment</h2>
                {theLastFiveCelebritiesPublished.map((star) => {
                  return (
                <CelebrityCard starToDisplay= {star}/>
                  )
        })}
            </section>
            <section>
                <h2>Les 3 célebritées choisies par la rédac</h2>
                {theLastThreeCelebritiesPickedByTeam.map((star) =>{
                return (
                  <CelebrityCard starToDisplay= {star}/>
                )
 // Je fais appel à mon composant CelebrityCard afin d'éviter la répétion de mon code
        })}
            </section>
        </main>
        <Footer />
        </>
    );
}
// Je trie mes dates 
// Je récupère ensuite les 5 dernières
export default HomePage;

// Créer une nouvelle app pour les célébrités pétées avec :
// Une page d'accueil qui affiche les 5 célebritées  publiées les plus récemments
// la page d'accueil affiche aussi les 3 célebritées choisies par la rédac



// toutes les pages doivent afficher un header et un footer