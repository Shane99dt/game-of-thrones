import React from 'react'
import Character from './components/Character';
import Continents from './components/Continents';
let favIndex

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      characters: [],
      favorites:[],
      continents:[],
      favBtnDisable: false,
      showCharacters: true,
      showContinents: true,
      showFavorites: false,
    }
  }

  async componentDidMount(){
    const requestCharacters = await fetch("https://thronesapi.com/api/v2/Characters")
    const responseCharacters = await requestCharacters.json();

    const requestContinents = await fetch("https://thronesapi.com/api/v2/Continents")
    const responseContinents = await requestContinents.json();

    this.setState({
      characters: responseCharacters,
      continents: responseContinents
    })
    console.log(responseContinents)

  }

  handleFavoriteClick = (i) => {
    const clonedFavorites = [...this.state.favorites]
  //  // const clonedFavorites = [...this.state.favorites, (key: value)]
      //upper line shows how to push in same line

    clonedFavorites.push(this.state.characters[i])
    this.setState({
      favorites: clonedFavorites,
      // favBtnDisable: clonedFavorites.id(i)
    })
  }

  handleClickCharacters = () => {
    this.setState({
      showCharacters: true,
      showContinents: false,
      showFavorites : false
    })
  }

  handleClickContinents = () => {
    this.setState({
      showCharacters: false,
      showContinents: true,
      showFavorites : false
    })
  }

  handleClickFavorites = () => {
    this.setState({
      showCharacters: false,
      showContinents: false,
      showFavorites : true
    })
  }


	render() {
		return(
      <div className='container d-flex flex-column align-items-center'>
        <h1>Game of thrones</h1>
        <div className='d-flex flex-row gap-4'>
          <button onClick={this.handleClickCharacters} type="button" className="btn btn-dark">Characters</button>
          <button onClick={this.handleClickContinents} type="button" className="btn btn-dark">Continents</button>
          <button onClick={this.handleClickFavorites} type="button" className="btn btn-dark">Favorites</button>
        </div>
        <div className='d-flex flex-row flex-wrap col-8' id="characters-div">
          { this.state.showCharacters &&
            <>
              {this.state.characters.map((char, i) => (
                <Character
                  fullName={char.fullName}
                  picture = {char.imageUrl}
                  title={char.title}
                  favoriteClick={() => this.handleFavoriteClick(i)}
                  // idGiven = {char.id}
                  favButton = {this.state.favBtnDisable}
                />
              ))}
            </>
          }
          {this.state.showContinents &&
            <>
              {this.state.continents.map((char) => (
                <Continents
                  continentName={char.name}
                />
              ))}
            </>
          }
          { this.state.showFavorites &&
            <>
              {this.state.favorites.map((char, i) => (
                <Character
                  fullName={char.fullName}
                  picture = {char.imageUrl}
                  title={char.title}
                  favoriteClick={() => this.handleFavoriteClick(i)}
                  // idGiven = {char.id}
                  favButton = {this.state.favBtnDisable}
                />
              ))}
            </>
          }
        </div>
      </div>
		)
	}
}

export default App