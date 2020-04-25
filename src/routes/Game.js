import React from 'react'
import PropTypes from 'prop-types'
import { Loading } from '../components/Loading'
import { QuestionCard } from '../components/QuestionCard'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      currentQuestionIndex: 0,
    }
  }

  decrementCurrentQuestionIndex = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex - 1,
    })
  }

  incrementCurrentQuestionIndex = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    })
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
    const isNextQuestionAvailable = this.state.currentQuestionIndex + 1 !== this.state.questions.length

    return (
      <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
        {isLoading ? <Loading /> :
          <>
            <QuestionCard
              questionsLength={this.state.questions.length}
              question={question}
              category={category}
              currentQuestionIndex={this.state.currentQuestionIndex + 1}
            />
            {!!this.state.currentQuestionIndex &&
              <button
                className="btn btn-primary mt-2"
                onClick={this.decrementCurrentQuestionIndex}
              >
                Previous question
              </button>
            }
            {isNextQuestionAvailable &&
              <button
                className="btn btn-primary mt-2"
                onClick={this.incrementCurrentQuestionIndex}
              >
                Next question
              </button>
            }
          </>
        }
      </div>
    )
  }
}

Game.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
}

export default Game
