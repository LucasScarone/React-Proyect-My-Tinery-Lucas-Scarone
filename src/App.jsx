import { Cities } from "./componets/views/Cities/Cities";
import Home from "./componets/views/Home/Home"
import { BrowserRouter, Routes, Route  } from "react-router-dom";
function App() {

  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route >
        <Route path="/Cities" element={<Cities></Cities>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
