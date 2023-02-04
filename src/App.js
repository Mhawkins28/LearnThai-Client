import { Routes, Route } from "react-router-dom";
import TopNav from "./components/Navbars/TopNav";
import WelcomePage from "./pages/WelcomePage"
import DashboardPage from "./pages/DashboardPage";
import FlashCatPage from "./pages/FlashPages/FlashCatPage";
import LetterFlashPage from "./pages/FlashPages/LetterFlashPage";
import NumberFlashPage from "./pages/FlashPages/NumberFlashPage";
import PhraseFlashPage from "./pages/FlashPages/PhraseFlashPage";
import ResourcePage from "./pages/ResourcePages/ResourceCatPage";


function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/flashcards' element={<FlashCatPage />} />
        <Route path='/flashcards/letters' element={<LetterFlashPage />} />
        <Route path='/flashcards/numbers' element={<NumberFlashPage />} />
        <Route path='/flashcards/phrases' element={<PhraseFlashPage />} />
        <Route path='/resources' element={<ResourcePage />} />
      </Routes>
    </>
  );
}

export default App;
