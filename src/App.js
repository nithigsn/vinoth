import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext,  useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Pages/Main";





export const userContext=createContext();


function App() {

  const [home, setHome] = useState(() => {
    const savedHome = localStorage.getItem('home');
    return savedHome !== null ? JSON.parse(savedHome) : false;
  });
  // Update local storage whenever 'home' changes
  useEffect(() => {
    localStorage.setItem('home', JSON.stringify(home));
  }, [home]);

  return (

    <userContext.Provider value={{home,setHome}}>
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/hindu' element={<Footer/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
