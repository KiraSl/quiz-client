import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

class CodeBlock extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      questions: []
    }
  }

  async componentDidMount() {
    const { questions } = await fetch('http://localhost:3001/categories/1?include=questions')
      .then(category=> category.json())
    this.setState({ questions })
  }

  render() {
    return (
      <div>
        {this.state.questions.map((question, index) =>
          <SyntaxHighlighter key={index} language={question.type} style={docco}>
            {question.codeBlock}
          </SyntaxHighlighter>
        )}
      </div>
    )
  }
}

export default CodeBlock
