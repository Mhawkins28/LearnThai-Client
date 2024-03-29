import { Routes, Route, useParams } from "react-router-dom";
import TopNav from "./components/Navbars/TopNav";
import WelcomePage from "./pages/WelcomePage"
import DashboardPage from "./pages/DashboardPage";
import FlashCatPage from "./pages/FlashPages/FlashCatPage";
import LetterFlashPage from "./pages/FlashPages/LetterFlashPage";
import ConsonantFlashPage from "./pages/FlashPages/ConsonantFlashPage";
import NumberFlashPage from "./pages/FlashPages/NumberFlashPage";
import PhrasesPage from "./pages/FlashPages/PhrasesPage";
import PhraseFlashPage from "./pages/FlashPages/PhraseFlashPage";
import ResourcePage from "./pages/ResourcePages/ResourceCatPage";
import VidResourcePage from "./pages/ResourcePages/VidResourcePage";
import MatResourcePage from "./pages/ResourcePages/MatResourcePage";
import LoginPage from "./pages/AuthPages/LoginPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";



function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} /> 
        <Route path='/' element={<WelcomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/flashcards' element={<FlashCatPage />} />
        <Route path='/flashcards/letters' element={<LetterFlashPage />} />
        <Route path='/flashcards/letters/consonants' element={<ConsonantFlashPage />} />
        {/* <Route path='/flashcards/letters/vowels' element={<VowelFlashPage />} /> */}
        <Route path='/flashcards/numbers' element={<NumberFlashPage />} />
        <Route path='/flashcards/phrases' element={<PhrasesPage />} />
        {/* <Route path='/flashcards/phrases/cat/:category' element={<PhraseFlashPage />} /> */}

        <Route path='/notes' element={<ResourcePage />} />
        <Route path='/notes/favorites' element={<ResourcePage />} />
        <Route path='/resources' element={<ResourcePage />} />
        <Route path='/resources/videos' element={<VidResourcePage />} />
        <Route path='/resources/materials' element={<MatResourcePage />} />
      </Routes>
    </>
  );
}

export default App;
