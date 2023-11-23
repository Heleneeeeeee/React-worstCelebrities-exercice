import { useState } from "react";

const LikesCard = () => {

    const [likes, setLikes] = useState (0)

    const handleLikesClick = () => {
        setLikes(likes+1)
    }

    console.log (likes)

    return (
        <main>
            <button onClick={handleLikesClick}>Like</button>
            <p>Vous avez cliqué {likes} fois</p>
        </main>
    )
}

export default LikesCard;