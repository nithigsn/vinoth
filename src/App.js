import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import IndianWeddings from "./Pages/IndianWeddings";





export const userContext = createContext();


function App() {

  const [home, setHome] = useState(true)
  //   const savedHome = localStorage.getItem('home');
  //   return savedHome !== null ? JSON.parse(savedHome) : true;
  // });

  // useEffect(() => {
  //   localStorage.setItem('home', JSON.stringify(home));
  // }, [home]);

  return (

    <userContext.Provider value={{ home, setHome }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/hindu' element={<IndianWeddings/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
