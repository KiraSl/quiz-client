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

    // Next: create a component to render the question & create a "Next" button to move to the next question. 
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
        {category && <h1>{category.name}</h1>}
        {question ?
          <>
            <div>{this.state.currentQuestionIndex + 1} /{this.state.questions.length}</div>
            <h3>{question.title}</h3>
            <p>{question.description}</p>
            {question.codeBlock &&
              <SyntaxHighlighter language={question.codeType} style={dracula}>
                {question.codeBlock}
              </SyntaxHighlighter>
            }
          </> :
          <h3>Loading...</h3>
        }
      </div >
    )
  }
}

Game.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
}


export default Game
