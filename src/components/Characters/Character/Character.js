import React from 'react'

const Character = (props) => {
  const { character } = props

  const showStatus = (status) => {
    if (status === 'Alive') {
      return (
        <span className="py-1 px-6 text-green-400 capitalize bg-green-100 rounded-lg">{character.status}</span>
      )
    } else if (status === 'Dead') {
      return (
        <span className="py-1 px-6 text-red-400 capitalize bg-red-100 rounded-lg">{character.status}</span>
      )
    } else if (status === 'unknown') {
      return (
        <span className="py-1 px-6 text-yellow-400 capitalize bg-yellow-100 rounded-lg">{character.status}</span>
      )
    }
  }
  return (
    <div className="flex flex-col">
      <div
        className="group grid grid-cols-6 py-3 group-hover:py-0 px-6 text-gray-400 rounded-lg transition duration-150 ease-in transform cursor-pointer hover:px-10 hover:bg-white hover:shadow-xl hover:scale-105">
        <div className="flex flex-row col-span-3 items-center -ml-6">
          <img src={character.image} alt=""
               className="object-cover object-center w-16 h-16 rounded-lg group-hover:h-32 group-hover:w-24"/>
          <div className="ml-4">
            <p className="font-semibold text-gray-600">{character.name}</p>
            <p className="mt-1 text-gray-400">Origin: {character.origin.name}</p>
          </div>
        </div>
        <div className="flex items-center">{character.gender}</div>
        <div className="flex items-center">{character.species}</div>
        <div className="flex items-center">
          {showStatus(character.status)}
        </div>
      </div>
    </div>
  )
}

export default Character