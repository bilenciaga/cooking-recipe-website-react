import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from "./components/Navbar"

function App() {
  return (
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/recipes/:id" element={<Recipe />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
