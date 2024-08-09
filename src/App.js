import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import IndianWeddings from "./Pages/IndianWeddings";
import ArunSanthiya from "./Pages/Indian/ArunSanthiya";
import FistherVanissa from "./Pages/Indian/FishtherVanissa";






export const userContext = createContext();


function App() {

  const [home, setHome] = useState(true)
  //   const savedHome = localStorage.getItem('home');
  //   return savedHome !== null ? JSON.parse(savedHome) : true;
  // });

  // useEffect(() => {
  //   localStorage.setItem('home', JSON.stringify(home));
  // }, [home]);


  const [tab, setTab] = useState(() => {
    const savedTab = localStorage.getItem('tab');
    return savedTab !== null ? JSON.parse(savedTab) : "home"
  })

  useEffect(() => {
    localStorage.setItem('tab', JSON.stringify(tab));
  }, [tab])

  return (

    <userContext.Provider value={{ home, setHome, tab, setTab }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/hindu' element={<IndianWeddings />} />
          <Route path="/hindu/arunsanthiya" element={<ArunSanthiya />} />
          <Route path="/hindu/fisthervanissa" element={<FistherVanissa />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
