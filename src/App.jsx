import { Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import PostDetailPage from "./pages/PostDetailPage";
import UpdatePage from "./pages/UpdatePage";
import FavoritesPage from "./pages/FavoritesPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import EditDetailPage from "./pages/EditDetailPage";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/createPage" element={<CreatePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/:id/update" element={<UpdatePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/edit/:id" element={<EditDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
