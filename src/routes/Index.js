import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Container } from 'react-bootstrap'

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCategory: null,
      categories: [],
    }
  }

  async componentDidMount() {
    const categories = await fetch('http://localhost:3001/categories')
      .then(res => res.json())
    this.setState({ categories })
  }

  selectCategory = (event) => {
    this.setState({
      selectedCategory: event.target.value,
    })
  }

  render() {
    return (
      <Container className="d-flex align-items-center justify-content-center vh-100 flex-column">
        <h1>Welcome to the Magnificent Quiz</h1>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Please select a category to start the game</Form.Label>
            <Form.Control as="select" onChange={this.selectCategory} defaultValue={'default'}>
              <option value="default" disabled>Select a category</option>
              {this.state.categories.map((category, index) => <option value={category.name} key={index}>{category.name}</option>)}
            </Form.Control>
          </Form.Group>
          <Link
            className={`btn btn-primary ${this.state.selectedCategory ? '' : 'disabled'}`}
            to={`/game?category=${this.state.selectedCategory}`}
          >
            Start
          </Link>
        </Form>
      </Container>
    )
  }
}

export default Index
