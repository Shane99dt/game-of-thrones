import React from 'react'

class Continents extends React.Component {
	render() {
		return(
      <div className="card mt-3 col-md-4 m-1">
        <div className="card-body">
          <h5 className="card-title">{this.props.continentName}</h5>
        </div>
      </div>
		)
	}
}

export default Continents