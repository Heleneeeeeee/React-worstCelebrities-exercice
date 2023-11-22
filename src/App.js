import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import CelebritiesPage from "./page/CelebritiesPage";
import CelebrityDetailsPage from "./page/CelebrityDetailsPage"
import RandomCelebrityPage from "./page/RandomCelebrityPage";
import TvSpeakersPage from "./page/TvSpeakersPage";
import CopyrightPage from "./page/CopyrightPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebritiespage" element={<CelebritiesPage />} />
        <Route path="/celebrity/:id/detailspage" element={<CelebrityDetailsPage />} />
        <Route path="/randompage" element={<RandomCelebrityPage />} />
        <Route path="/tvspeakerspage" element={<TvSpeakersPage />} />
        <Route path="/copyrightpage" element={<CopyrightPage />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
