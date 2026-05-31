import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import PostDetailPage from "./pages/PostDetailPage";
import UpdatePage from "./pages/UpdatePage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/:id/update" element={<UpdatePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile/:id/edit" element={<EditProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
