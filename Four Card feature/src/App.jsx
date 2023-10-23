import React from "react"
import Intro from "./Intro"
import Card from "./Card"
import cardData from "./cardData"
import './index.css'

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
          Coded by <a href="#">David Omonehin</a>.
        </p>
      </footer>
    </main>
  )
}

export default App
