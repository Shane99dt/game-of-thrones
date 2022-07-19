import React from 'react'
import Character from './components/Character';
let favIndex

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      characters: [],
      favorites:[]
    }
  }

  async componentDidMount(){
    const request = await fetch("https://thronesapi.com/api/v2/Characters")
    console.log(request)
    const response = await request.json();
    console.log(response);

    this.setState({
      characters: response
    })
  }

  handleFavoriteClick = () => {
    this.setState({

    })
  }


	render() {
    console.log(this.state, "render")
		return(
      <div className='container d-flex flex-column align-items-center'>
        <h1>Game of thrones</h1>
        <div className='d-flex flex-row flex-wrap col-8'>
          {this.state.characters.map((char,i) => (
            <Character
              fullName={char.fullName}
              picture = {char.imageUrl}
              title={char.title}
              favoriteClick={this.handleFavoriteClick}
            />
          ))}
        </div>
      </div>
		)
	}
}

export default App