import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      currentQuestionIndex: 0,
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
    const question = this.state.questions[this.state.currentQuestionIndex]
    const isLoading = !question || !category

    // Next: create a component to render the question & create a "Next" button to move to the next question.
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <div className="card">
            <div className="card-header">
              <h3 className="d-flex justify-content-between">
                <span>{category.name}</span>
                <span>
                  {this.state.currentQuestionIndex + 1}/{this.state.questions.length}
                </span>
              </h3>
            </div>
            <div className="card-body">
              <p>{question.description}</p>
              {question.codeBlock && (
                <SyntaxHighlighter language={question.codeType} style={dracula}>
                  {question.codeBlock}
                </SyntaxHighlighter>
              )}
            </div>
            <div className="d-flex border-top">
              <ul className="list-group list-group-flush w-100">
                <li className="list-group-item bg-info"><button className="w-100 border-0 bg-transparent">Cras justo odio</button></li>
                <li className="list-group-item bg-info"><button className="w-100 border-0 bg-transparent">Dapibus ac facilisis in</button></li>
              </ul>
              <ul className="list-group list-group-flush w-100 border-left">
                <li className="list-group-item bg-info"><button className="w-100 border-0 bg-transparent">Cras justo odio</button></li>
                <li className="list-group-item bg-info"><button className="w-100 border-0 bg-transparent">Dapibus ac facilisis in</button></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

Game.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
}

export default Game
