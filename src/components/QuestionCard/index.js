import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'


class QuestionCard extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="d-flex justify-content-between">
            <span>{this.props.category.name}</span>
            <span>
              {this.props.currentQuestionIndex}/{this.props.questionsLength}
            </span>
          </h3>
        </div>
        <div className="card-body">
          <p>{this.props.question.description}</p>
          {this.props.question.codeBlock && (
            <SyntaxHighlighter language={this.props.question.codeType} style={dracula}>
              {this.props.question.codeBlock}
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
    )
  }
}

QuestionCard.propTypes = {
  category: PropTypes.object.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  questionsLength: PropTypes.number.isRequired,
}

export { QuestionCard }
