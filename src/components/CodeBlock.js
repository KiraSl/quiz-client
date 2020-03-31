import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Form from 'react-bootstrap/form'

class CodeBlock extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      questions: [],
      categories: [],
    }
  }

  async componentDidMount() {
    const categories = await fetch('http://localhost:3001/categories')
      .then(categories => categories.json())
    const questions = await fetch('http://localhost:3001/questions?categoryId=1')
      .then(questions => questions.json())
    this.setState({ questions, categories })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              {this.state.categories.map((category, index) => (
                <option key={index}>{category.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
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
