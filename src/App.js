import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Index from './routes/Index'
import Game from './routes/Game'
import EndGame from './routes/EndGame'
import './App.css'

function App() {
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
    //   <h1>Javascript</h1>
    //   <div>1/10</div>
    // </div>
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/end-game" component={EndGame} />
    </Router>
  )
}

export default App
