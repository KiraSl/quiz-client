import React from 'react'
import PropTypes from 'prop-types'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/questions?categoryId=${this.props.match.params.categoryId}`)
    const questions = await response.json()
    this.setState({ questions })
  }

  render() {
    const { categoryId } = this.props.match.params
    const category = this.props.categories.find(category => category.id.toString() === categoryId)
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
        {category && <h1>{category.name}</h1>}
        <div>1/{this.state.questions.length}</div>
      </div >
    )
  }
}

Game.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
}


export default Game
