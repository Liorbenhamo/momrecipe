import "./App.css";
import NavBar from "./components/navbar";
import HomePage from "./pages/homepage";
import Card from "./components/card";
import LoginPage from "./pages/loginpage";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipePage from "./pages/recipepage";
import PostPage from "./pages/postpage";
import EditPage from "./pages/editpage";
export const InfoContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  const [json, setJson] = useState([]);
  const [filtered, setFiltered] = useState(json);
  const [loged, setLoged] = useState(false);
  const obj = {
    search,
    setSearch,
    json,
    setJson,
    filtered,
    setFiltered,
    loged,
    setLoged,
  };
  return (
    <div>
      <InfoContext.Provider value={obj}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/recipe/:id" element={<RecipePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/addrecipe" element={<PostPage />}></Route>
            <Route path="/editrecipe" element={<EditPage />}></Route>
          </Routes>
        </BrowserRouter>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
