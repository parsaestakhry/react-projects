import { Brand } from "./components/brand/Brand";
import { NavBar } from "./components/navbar/NavBar";
import { Blog } from "./containers/blog/Blog";
import { Features } from "./containers/features/Features";
import { Footer } from "./containers/footer/Footer";
import { Header } from "./containers/header/Header";
import { Possibility } from "./containers/possibility/Possibility";
import { WhatGPT3 } from "./containers/whatGPT3/WhatGPT3";
import {Cta} from "./components/cta/Cta"
import "./App.css"
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <NavBar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
