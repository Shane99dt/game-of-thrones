import React from 'react'

class Character extends React.Component {
	render() {
		return(
      <div className="card mt-3 col-md-4">
        <img src={this.props.picture} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.fullName}</h5>
          <p className="card-text">{this.props.title}</p>
          <button onClick={this.props.favoriteClick} type="button" className="btn btn-dark" id={this.props.buttonId} disabled={this.props.favButton}>Add to favorites</button>
        </div>
      </div>
		)
	}
}

export default Character