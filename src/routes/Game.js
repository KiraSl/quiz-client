import React from 'react'
import PropTypes from 'prop-types'

class Game extends React.Component {
  render() {
    const { categoryId } = this.props.match.params
    const category = this.props.categories.find(category => category.id.toString() === categoryId)
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
        {category ? <h1>{category.name}</h1> : null}
        <div>1/10</div>
      </div >
    )
  }
}

Game.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
}


export default Game
