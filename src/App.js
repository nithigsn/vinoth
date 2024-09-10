import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import IndianWeddings from "./Pages/IndianWeddings";
import ArunSanthiya from "./Pages/Indian/ArunSanthiya";
import FistherVanissa from "./Pages/Indian/FishtherVanissa";
import AashifSangeetha from "./Pages/Indian/AashifSangeetha";
import About from "./Pages/About";
import Play from "./Pages/Play";
import Contact from "./Pages/Contact";
import PreLoading from "./Pages/PreLoading";






export const userContext = createContext();


function App() {

 


  const [tab, setTab] = useState(() => {
    
    const savedTab = sessionStorage.getItem('tab');
    return savedTab !== null ? JSON.parse(savedTab) : "home"
  })

  useEffect(() => {
    sessionStorage.setItem('tab', JSON.stringify(tab));
  }, [tab])

  return (

    <userContext.Provider value={{  tab, setTab }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/play' element={<Play/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/loading' element={<PreLoading/>}/>
          <Route path='/hindu' element={<IndianWeddings />} />
          <Route path="/hindu/arunsanthiya" element={<ArunSanthiya />} />
          <Route path="/hindu/fisthervanissa" element={<FistherVanissa />} />
          <Route path="/hindu/aashifsangeetha" element={<AashifSangeetha/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
