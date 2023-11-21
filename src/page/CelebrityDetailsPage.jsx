import { useParams } from "react-router-dom";
import { shittyStars } from "../utils/celebrities-utils";

const CelebritiesPage = () => {

    const {id} = useParams ()

    const celebrityfound = shittyStars.find((star) =>{
        return star.id == id;
    })

    return (
        <main>
            <h2>Détail de cette célébrité</h2>
                <article>
                    <h3>{celebrityfound.name}</h3>
                    <p>Sa Bio: {celebrityfound.bio}</p>
                    <p><img src={celebrityfound.img} alt={celebrityfound.name} /></p>
                    <p>Article publié le {celebrityfound.publishedAt}</p>
                </article>
        </main>
    );
}

export default CelebritiesPage;

// une page qui affiche le détail de la célebritée