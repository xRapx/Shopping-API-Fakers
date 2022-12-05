import Header from "./pages/Header";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./Product/Cart";
import { useEffect } from "react";
import productAPI from "./services/productAPI";
import data from "./services/data.json"

console.log(data)

function App() {

  useEffect(() =>{
    productAPI.getAll().then((response) =>console.log(response))
  });

  return (
    <BrowserRouter>
       <Header />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
