import About from "./About"
import Contact from "./Contact"
import Home from "./home"
import Footer from "./components/Footer"
import {ThemeProvider} from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import Error from "./Error"
import ScrollToTop from "./components/ScrollToTop"
import Services from "./Services"
import Events from "./Events"
import ThrustMain from "./ThurstMain"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"

const App = () => {
  const theme={
    colors:{
      heading:"rgb(0 0 0)",
      text:"rgb(0 0 0)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"rgb(249 249 255)",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,234,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg, rgb(132 144 255) 0% rgb(98 189 252) 100%",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15)0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{mobile:"768px",tab:"998px"},
  }

  return (
  <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <BrowserRouter>
  <Navigation />
  
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/event" element={<Events />}/>
     <Route path="/thrust" element={<ThrustMain />}/>
     <Route path="/services" element={<Services />}/>
     <Route path="/contact" element={<Contact />}/> 
     <Route path="*" element={<Error />}/>     
   </Routes>
   <ScrollToTop/>
   <Footer/>
  </BrowserRouter>
  </ThemeProvider>
 )
}

export default App