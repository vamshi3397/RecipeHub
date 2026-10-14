import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Recipes } from "./pages/Recipes"
import NavBar from "./NavBar"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRouter >
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
