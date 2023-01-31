import { Routes, Route } from "react-router-dom";
import TopNav from "./components/Navbars/TopNav";
import WelcomePage from "./pages/WelcomePage"
import DashboardPage from "./pages/DashboardPage";
import FlashcardPage from "./pages/FlashcardPage";
import ResourcePage from "./pages/ResourcePage";


function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/flashcards' element={<FlashcardPage />} />
        <Route path='/resources' element={<ResourcePage />} />
      </Routes>
    </>
  );
}

export default App;
