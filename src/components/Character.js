import React from 'react'

class Character extends React.Component {
	render() {
		return(
      <div className="card mt-3 col-8 col-md-3 col-lg-3">
        <img src={this.props.picture} className="card-img-top" alt="..."/>
        {/* <div className='character-img' style={{ backgroundImage: `url(${this.props.picture})` }}></div> */}
        <div className="card-body character-card d-flex flex-column align-items-center">
          <h5 className="card-title">{this.props.fullName}</h5>
          <p className="card-text">{this.props.title}</p>
          {this.props.favoriteClick &&
            <button onClick={this.props.favoriteClick} type="button" className="btn btn-primary" id={this.props.buttonId} disabled={this.props.favButton}>Add to favorites</button>
          }
        </div>
      </div>
		)
	}
}

export default Character