import './App.css'

import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";

import "./styles/Components/app.sass";

function App() {

  return (
    <>
     <div id="portfolio">
     <h1>I´m José Neilson</h1> 
      <Sidebar />
      <MainContent />
    </div>
    </>
  )
}

export default App
