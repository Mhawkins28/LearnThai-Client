import { Routes, Route } from "react-router-dom";
import TopNav from "./components/Navbars/TopNav";
import WelcomePage from "./pages/WelcomePage"
import DashboardPage from "./pages/DashboardPage";
import FlashCatPage from "./pages/FlashPages/FlashCatPage";
import LetterFlashPage from "./pages/FlashPages/LetterFlashPage";
import LetterCard from "./pages/FlashPages/LetterCard";
import NumberFlashPage from "./pages/FlashPages/NumberFlashPage";
import NumberCard from "./pages/FlashPages/NumberCard";
import PhraseFlashPage from "./pages/FlashPages/PhraseFlashPage";
import PhraseCard from "./pages/FlashPages/PhraseCard";
import ResourcePage from "./pages/ResourcePages/ResourceCatPage";
import VidResourcePage from "./pages/ResourcePages/VidResourcePage";
import MatResourcePage from "./pages/ResourcePages/MatResourcePage";



function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/flashcards' element={<FlashCatPage />} />
        <Route path='/flashcards/letters' element={<LetterFlashPage />} />
        <Route path='/flashcards/letters/:id' element={<LetterCard />} />
        <Route path='/flashcards/numbers' element={<NumberFlashPage />} />
        <Route path='/flashcards/numbers/:id' element={<NumberCard />} />
        <Route path='/flashcards/phrases' element={<PhraseFlashPage />} />
        <Route path='/flashcards/phrases/:id' element={<PhraseCard />} />
        <Route path='/resources' element={<ResourcePage />} />
        <Route path='/resources/videos' element={<VidResourcePage />} />
        <Route path='/resources/materials' element={<MatResourcePage />} />
      </Routes>
    </>
  );
}

export default App;
