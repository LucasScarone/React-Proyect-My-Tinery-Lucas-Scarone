import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {Home} from "./views/Home"
import { Cities } from "./views/Cities";
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
