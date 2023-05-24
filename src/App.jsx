import { Routes, Route } from "react-router-dom";
import TopNav from "./components/Navbars/TopNav";
import WelcomePage from "./pages/WelcomePage"
import DashboardPage from "./pages/DashboardPage";
import FlashCatPage from "./pages/FlashPages/FlashCatPage";
import LetterFlashPage from "./pages/FlashPages/LetterFlashPage";
import ConsonantFlashPage from "./pages/FlashPages/ConsonantFlashPage";
import NumberFlashPage from "./pages/FlashPages/NumberFlashPage";
import PhraseFlashPage from "./pages/FlashPages/PhraseFlashPage";
import ResourcePage from "./pages/ResourcePages/ResourceCatPage";
import VidResourcePage from "./pages/ResourcePages/VidResourcePage";
import MatResourcePage from "./pages/ResourcePages/MatResourcePage";
import LoginPage from "./pages/AuthPages/LoginPage";
import SignUpPage from "./pages/AuthPages/LoginPage";



function App() {
  return (
    <>
      <TopNav />

      <Routes>
        {/* <Route path="/login" element={<LoginPage/>} />*/}
        {/* <Route path="/register" element={<SignUpPage/>} />  */}
        <Route path='/' element={<WelcomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/flashcards' element={<FlashCatPage />} />
        <Route path='/flashcards/letters' element={<LetterFlashPage />} />
        <Route path='/flashcards/letters/consonants' element={<ConsonantFlashPage />} />
        {/* <Route path='/flashcards/letters/vowels' element={<VowelFlashPage />} /> */}
        <Route path='/flashcards/numbers' element={<NumberFlashPage />} />
        <Route path='/flashcards/phrases' element={<PhraseFlashPage />} />
        <Route path='/resources' element={<ResourcePage />} />
        <Route path='/resources/videos' element={<VidResourcePage />} />
        <Route path='/resources/materials' element={<MatResourcePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
