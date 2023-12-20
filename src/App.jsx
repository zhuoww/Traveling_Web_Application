import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Explore from "./pages/Explore/Explore";
import Plans from "./pages/Plans/Plans";
import Reviews from "./pages/Reviews/Reviews";
import Detail from "./pages/Detail/Detail";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [page, setPage] = useState("Explore");
  const [showPrivacyPage, setShowPrivacyPage] = useState(false);

  const handlePageChange = (page) => {
    setPage(page);
    setSelectedCard(null);
    setShowDataPage(false);
  };

  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
    setPage("Detail");
  };

  const handlePrivacyButtonClick = () => {
    setPage("PrivacyPage");
    setShowPrivacyPage(true);
  };

  return (
    <div>
      <Header onPageChange={handlePageChange} />
      <div>
        {page === "Explore" && <Explore onCardClick={handleCardClick} />}
        {page === "Plans" && <Plans />}
        {page === "Reviews" && <Reviews />}
        {page == "Detail" && selectedCard && (
          <Detail onClose={() => setPage("Explore")} />
        )}
        {page === "PrivacyPage" && showPrivacyPage && (
          <PrivacyPage onClose={() => setPage("Explore")} />
        )}
      </div>
      <Footer onClick={handlePrivacyButtonClick} />
    </div>
  );
}

export default App;
