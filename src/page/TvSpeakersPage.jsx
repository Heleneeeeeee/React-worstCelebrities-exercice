import Header from "../component/Header";
import SpeakerCard from "../component/SpeakerCard";
import Footer from "../component/Footer";

const TvSpeakersPage = () => {

    const shittyTvSpeakers = [
        "Laurent Ruquier", "Pascal Praud", "Cyril Hanouna", "Jean-Marc Morandini", "Marc-Olivier Fogiel"
    ];

    return (
        <>
        <Header pageTitle="tvspeakers"/>
        <main>
            <h2>Les pires présentateurs</h2>
            {shittyTvSpeakers.map((tvspeaker) => {
                return (
        <SpeakerCard  tvSpeakerName = {tvspeaker}   />
                )
            })}
        </main>
        <Footer />
        </>
    )
}

export default TvSpeakersPage;