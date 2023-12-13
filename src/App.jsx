import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components";

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
