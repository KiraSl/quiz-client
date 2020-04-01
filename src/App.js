import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './routes/Index'
import Game from './routes/Game'
import EndGame from './routes/EndGame'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/end-game" component={EndGame} />
    </Router>
  )
}

export default App
