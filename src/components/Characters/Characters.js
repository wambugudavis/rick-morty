import React, { Component } from 'react'

class Characters extends Component {
  state = {
    characters: [
      {
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Rick Sanchez',
        origin: 'Earth',
        gender: 'Male',
        species: 'Human',
        status: 'Alive'
      },
      {
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Rick Sanchez',
        origin: 'Earth',
        gender: 'Male',
        species: 'Human',
        status: 'Alive'
      },
      {
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Rick Sanchez',
        origin: 'Earth',
        gender: 'Male',
        species: 'Human',
        status: 'Alive'
      }
    ]
  }

  render () {
    const { state } = this
    return (
      <div className="card">
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

        <div className="flex flex-col">
          <div className="grid grid-cols-5 py-4 px-6 text-gray-400 hover:cursor-pointer">
            <div className="flex flex-row col-span-2 items-center -ml-6">
              <img src={state.characters[0].image} alt="" className="object-cover object-center w-16 h-16 rounded-lg"/>
              <div className="ml-4">
                <p className="font-semibold text-gray-600">{state.characters[0].name}</p>
                <p className="mt-1 text-gray-400">Origin: {state.characters[0].origin}</p>
              </div>
            </div>
            <div className="flex items-center">{state.characters[0].gender}</div>
            <div className="flex items-center">{state.characters[0].species}</div>
            <div className="flex items-center">
              <span className="py-1 px-6 text-green-400 bg-green-100 rounded-lg">{state.characters[0].status}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-5 py-4 px-6 text-gray-400 hover:cursor-pointer">
            <div className="flex flex-row col-span-2 items-center -ml-6">
              <img src={state.characters[0].image} alt="" className="object-cover object-center w-16 h-16 rounded-lg"/>
              <div className="ml-4">
                <p className="font-semibold text-gray-600">{state.characters[0].name}</p>
                <p className="mt-1 text-gray-400">Origin: {state.characters[0].origin}</p>
              </div>
            </div>
            <div className="flex items-center">{state.characters[0].gender}</div>
            <div className="flex items-center">{state.characters[0].species}</div>
            <div className="flex items-center">
              <span className="py-1 px-6 text-green-400 bg-green-100 rounded-lg">{state.characters[0].status}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-5 py-4 px-6 text-gray-400 hover:cursor-pointer">
            <div className="flex flex-row col-span-2 items-center -ml-6">
              <img src={state.characters[0].image} alt="" className="object-cover object-center w-16 h-16 rounded-lg"/>
              <div className="ml-4">
                <p className="font-semibold text-gray-600">{state.characters[0].name}</p>
                <p className="mt-1 text-gray-400">Origin: {state.characters[0].origin}</p>
              </div>
            </div>
            <div className="flex items-center">{state.characters[0].gender}</div>
            <div className="flex items-center">{state.characters[0].species}</div>
            <div className="flex items-center">
              <span className="py-1 px-6 text-green-400 bg-green-100 rounded-lg">{state.characters[0].status}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-5 py-4 px-6 text-gray-400 hover:cursor-pointer">
            <div className="flex flex-row col-span-2 items-center -ml-6">
              <img src={state.characters[0].image} alt="" className="object-cover object-center w-16 h-16 rounded-lg"/>
              <div className="ml-4">
                <p className="font-semibold text-gray-600">{state.characters[0].name}</p>
                <p className="mt-1 text-gray-400">Origin: {state.characters[0].origin}</p>
              </div>
            </div>
            <div className="flex items-center">{state.characters[0].gender}</div>
            <div className="flex items-center">{state.characters[0].species}</div>
            <div className="flex items-center">
              <span className="py-1 px-6 text-green-400 bg-green-100 rounded-lg">{state.characters[0].status}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-row justify-between items-center">
          <div className="grid grid-cols-7 gap-3">
            <div className="pagination navigation">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
              </svg>
            </div>
            <div className="pagination navigation">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <div className="pagination page active">
              1
            </div>
            <div className="pagination page">
              2
            </div>
            <div className="pagination page">
              3
            </div>
            <div className="pagination navigation">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div className="pagination navigation">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-row items center">
            <select id="country" name="country" autoComplete="country"
                    className="font-semibold mr-4">
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </select>
            <div className="flex items-center">
              <span className="font-semibold text-gray-300">Showing 1-50 of 235</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Characters