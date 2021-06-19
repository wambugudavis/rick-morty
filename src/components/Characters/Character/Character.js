import React from 'react'

const Character = (props) => {
  const { character } = props

  const showStatus = (status) => {
    if (status === 'alive') {
      return (
        <span className="py-1 px-6 text-green-400 bg-green-100 rounded-lg capitalize">{character.status}</span>
      )
    } else if (status === 'dead') {
      return (
        <span className="py-1 px-6 text-red-400 bg-red-100 rounded-lg capitalize">{character.status}</span>
      )
    } else if (status === 'unknown') {
      return (
        <span className="py-1 px-6 text-yellow-400 bg-yellow-100 rounded-lg capitalize">{character.status}</span>
      )
    }
  }
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-5 py-4 px-6 text-gray-400 hover:cursor-pointer">
        <div className="flex flex-row col-span-2 items-center -ml-6">
          <img src={character.image} alt=""
               className="object-cover object-center w-16 h-16 rounded-lg"/>
          <div className="ml-4">
            <p className="font-semibold text-gray-600">{character.name}</p>
            <p className="mt-1 text-gray-400">Origin: {character.origin}</p>
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