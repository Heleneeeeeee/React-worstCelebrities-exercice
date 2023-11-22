import CelebrityCard from "../component/CelebrityCard";
import { shittyStars } from "../utils/celebrities-utils";
import Header from "../component/Header";
import Footer from "../component/Footer";

const CelebritiesPage = () => {

    return (
        <>
        <Header pageTitle="celebrities"/>
        <main>
            <section>
                <h2>Toutes les célébrités les plus detestées</h2>
                {shittyStars.map((star) =>{
                    return (
                      <CelebrityCard starToDisplay= {star}/>
                );
            })}
            </section>
        </main>
        <Footer />
        </>
    );
}

export default CelebritiesPage;

// une page qui affiche toutes les célebritées