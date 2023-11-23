import { useParams } from "react-router-dom";
import { shittyStars } from "../utils/celebrities-utils";
import "./CelebrityDetailsPage.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import LikesCard from "../component/LikesCard";
const CelebritiesPage = () => {

    const {id} = useParams ()

    // J'utilise la fonction useParams afin de matcher l'id du tableau avec l'id de mon url

    const celebrityfound = shittyStars.find((star) =>{
        return star.id == id;
    })
 console.log()
    return (
        <>
        <Header />
        <main>
            {celebrityfound ? (
            <>
            <h2>Détail de cette célébrité</h2>
                <article>
                    <div className="card">
                        <h3>{celebrityfound.name}</h3>
                        <p><img src={celebrityfound.img} alt={celebrityfound.name} /></p>
                        <p className="textBio"><span>Sa Bio:</span> <br />{celebrityfound.bio}</p>
                        <p>Article publié le {celebrityfound.publishedAt}</p>
                    </div>
                    <LikesCard />
                </article>
                
            </>
            ) : (
            <p> Célébrité non trouvée</p>
            )}
        </main>
        <Footer />
        </>
    );
}

export default CelebritiesPage;

// une page qui affiche le détail de la célebritée