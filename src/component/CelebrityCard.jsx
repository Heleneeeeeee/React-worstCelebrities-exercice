import { Link } from "react-router-dom";

const CelebrityCard = ({starToDisplay}) => {
    return (
        <article>
          <Link to={`/celebrity/${starToDisplay.id}/detailspage`}>
          <h3>{starToDisplay.name}</h3> 
          </Link>
         </article>
      )
}

export default CelebrityCard

// Je crée un composant CelebrityCard que je vais pouvoir réutiliser dans plusieurs de mes pages

