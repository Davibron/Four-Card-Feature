import React from "react"
import Intro from "./Intro"
import Card from "./Card"
import cardData from "./cardData"
import './App.css'

function App() {
  const dataElement = cardData.map(data => {
    return <Card
      {...data}
    />
  })

  return (
    <main>
      <Intro />
      <div className="cards">
        {dataElement}
      </div>
      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </main>
  )
}

export default App
