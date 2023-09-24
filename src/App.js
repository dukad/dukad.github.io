
import './App.css';
import React from 'react'
import IntroductionPage from './Introduction.js'
import navBar from './components.js';
import { useState} from 'react'

function App() {
  const Bar = new navBar();
  return (
    <div className="App">
      <header className="Header">
        <div>
          {returnPage()}
        </div>
      </header>
        {Bar.render()}
    </div>
  );
}

function returnPage() {
  const introPage = new IntroductionPage()
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [introPage.render()]
  return pages[currentPage]
}

export default App;


