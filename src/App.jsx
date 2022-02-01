import Home from './components/home/home'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/Header'
import { IconContext } from "react-icons";
function App() {

  return (
    <div className="App">
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
         {/* include nav header here */}
         <Header />
         <Home />
         <Footer />
         </IconContext.Provider>
    </div>
  )
}

export default App
