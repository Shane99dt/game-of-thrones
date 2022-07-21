import React from 'react'
import Character from './components/Character';
import Continents from './components/Continents';
import "./App.css"


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      characters: [],
      continents:[],
      favorites:[],
      currentTab: 'characters',
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
  }

  handleFavoriteClick = (character) => {
    const findDuplicates =  this.state.favorites.find(
      favorite => favorite.id === character.id
    )

    if(!findDuplicates){
      const clonedFavorites = [...this.state.favorites, character]
      //// const clonedFavorites = [...this.state.favorites, character]
        //upper line shows how to push in same line
      this.setState({
        favorites: clonedFavorites,
      })
    }
  }

  handleCurrentTab = (tab) => {
    this.setState({
      currentTab: tab
    })
  }


	render() {
		return(
      <div className='container d-flex flex-column align-items-center mt-4'>
        <h1 className='page-title'>Game of Thrones</h1>
        <div className='d-flex flex-row gap-md-4 gap-1 mt-4'>

          <button onClick={() => this.handleCurrentTab('characters')} type="button" className="btn btn-dark">Characters</button>

          <button onClick={() => this.handleCurrentTab('continents')} type="button" className="btn btn-dark">Continents</button>

          <button onClick={() => this.handleCurrentTab('favorites')} type="button" className="btn btn-dark">Favorites</button>

        </div>
        <div className='d-flex flex-row flex-wrap justify-content-center mt-4 gap-md-2' id="characters-div">
          { this.state.currentTab === "characters" &&
            <>
              {this.state.characters.map((character) => (
                <Character
                  fullName={character.fullName}
                  picture = {character.imageUrl}
                  title={character.title}
                  favoriteClick={() => this.handleFavoriteClick(character)}
                />
              ))}
            </>
          }
          {this.state.currentTab === "continents" &&
            <>
              {this.state.continents.map((character) => (
                <Continents
                  continentName={character.name}
                />
              ))}
            </>
          }
          { this.state.currentTab === "favorites" &&
            <>
              {this.state.favorites.map((character) => (
                <Character
                  fullName={character.fullName}
                  picture = {character.imageUrl}
                  title={character.title}
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