import React, { Component } from 'react'
import Character from './Character/Character'
import Pagination from './Pagination/Pagination'

class Characters extends Component {
  state = {
    characters: [
      {
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Rick Sanchez',
        origin: 'Earth',
        gender: 'Male',
        species: 'Human',
        status: 'alive'
      },
      {
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Rick Sanchez',
        origin: 'Earth',
        gender: 'Male',
        species: 'Human',
        status: 'dead'
      },
      {
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Rick Sanchez',
        origin: 'Earth',
        gender: 'Male',
        species: 'Human',
        status: 'unknown'
      }
    ]
  }

  render () {
    const { state } = this
    return (
      <div className="card ">
        <h1 className="text-2xl font-semibold">Characters</h1>
        <p className="my-4 text-gray-400">More than 400+ characters</p>

        <div className="flex flex-col py-4">
          <div className="grid grid-cols-5 py-4 px-6 font-semibold text-gray-400 uppercase bg-rm-gray rounded-lg">
            <div className="col-span-2 text-gray-600">Character</div>
            <div>Gender</div>
            <div>Species</div>
            <div>Status</div>
          </div>
        </div>

        {
          state.characters.length !== 0 ?
            state.characters.map((character, index) => {
              return (
                <Character key={index} character={character}/>
              )
            }) :
            <div className="text-center text-gray-400 py-4">
              <p>No characters found!</p>
            </div>
        }

        <Pagination perPage={10} totalRecords={50}/>
      </div>
    )
  }
}

export default Characters