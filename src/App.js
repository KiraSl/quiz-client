import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './routes/Index'
import Game from './routes/Game'
import EndGame from './routes/EndGame'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
    }
  }

  async componentDidMount() {
    const categories = await fetch('http://localhost:3001/categories')
      .then(res => res.json())
    this.setState({ categories })
  }

  render() {
    return (
      <Router>
        <Route exact path="/">
          <Index categories={this.state.categories} />
        </Route>
        <Route
          exact
          path="/game/:categoryId"
          render={props => {
            return <Game categories={this.state.categories} {...props} />
          }}
        />
        <Route exact path="/end-game" component={EndGame} />
      </Router>
    )
  }
}

export default App
