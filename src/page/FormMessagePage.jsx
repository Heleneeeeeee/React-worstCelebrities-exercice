import { useState } from "react"


const FromMessagePage = () => {
    
    const [message, setMessage]= useState(" ")
    
    const handleMessageForm = ( event) => {
    setMessage(event.target.value)
    }
    return (
        <form>
            <label>
            Message
                <input onChange={handleMessageForm} type="text" name="message"/>
            </label>
                <p>Vous avez envoyé:"{message}"</p>
        </form>
    )
}

export default FromMessagePage;

// J'utilise la fonction useState dont ma variable initiale à pour valeur une chaîne de caractère vide et qui sera recharger à chaque changement d'état
// Je déclare ensuite un event dans mon input "message" afin de récupérer sa valeur qui sera ensuite afficher dans la balise <p>
