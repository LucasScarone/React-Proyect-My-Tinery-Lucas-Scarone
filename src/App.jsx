import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {Home} from "./views/Home"
import { Cities } from "./views/Cities";
import { Details } from "./views/Details";
import store from "./Redux/store"
import { Provider } from "react-redux";


function App() {

  return (
   <>
     <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route >
          <Route path="/Cities" element={<Cities></Cities>}></Route>
          <Route path="/Cities/:id" element={<Details></Details>} ></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
   </>
  )
}

export default App
        