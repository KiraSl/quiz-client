import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Form, Container } from 'react-bootstrap'

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCategoryId: null,
    }
  }

  selectCategory = event => {
    this.setState({
      selectedCategoryId: event.target.value,
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
              {this.props.categories.map((category, index) => <option value={category.id} key={index}>{category.name}</option>)}
            </Form.Control>
          </Form.Group>
          <Link
            className={`btn btn-primary ${this.state.selectedCategoryId ? '' : 'disabled'}`}
            to={`/game/${this.state.selectedCategoryId}`}
          >
            Start
          </Link>
        </Form>
      </Container>
    )
  }
}

Index.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default Index
