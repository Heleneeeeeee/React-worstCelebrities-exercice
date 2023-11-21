import { shittyStars } from "../utils/celebrities-utils";
import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header";
import Footer from "../component/Footer";

const RandomCelebrityPage = () => {
    
      const randomIndex = ((Math.random()*shittyStars.length-1)).toFixed(0) 
      const randomCelebrity = shittyStars[randomIndex];
      
    
      return (
        <>
        <Header />
        <main>
            <section>
                <h2>Célébrité random</h2>
                <CelebrityCard starToDisplay= {randomCelebrity}/>

            </section>
        </main>
        <Footer />
        </>
    );
}

export default RandomCelebrityPage;



// une page qui affiche une célebritée au hasard parmi toutes les celebritées