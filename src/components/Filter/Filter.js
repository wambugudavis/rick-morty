import React, { Component } from 'react'

class Filter extends Component {

  render () {
    return (
      <div className="card">
        <div className="mb-8">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
          <input type="text" name="name" id="name" autoComplete="off"
                 className="focus:outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div className="mb-8">
          <label htmlFor="status" className="block text-lg font-semibold text-gray-800">Status</label>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input id="all" name="status" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="all" className="ml-3 block text-sm font-medium text-gray-700">
                All
              </label>
            </div>
            <div className="flex items-center">
              <input id="alive" name="status" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="alive" className="ml-3 block text-sm font-medium text-gray-700">
                Alive
              </label>
            </div>
            <div className="flex items-center">
              <input id="dead" name="status" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="dead" className="ml-3 block text-sm font-medium text-gray-700">
                Dead
              </label>
            </div>
            <div className="flex items-center">
              <input id="unknown" name="status" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="unknown" className="ml-3 block text-sm font-medium text-gray-700">
                Unknown
              </label>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="gender" className="block text-lg font-semibold text-gray-800">Gender</label>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input id="all-gender" name="gender" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="all-gender" className="ml-3 block text-sm font-medium text-gray-700">
                All
              </label>
            </div>
            <div className="flex items-center">
              <input id="female" name="gender" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input id="male" name="gender" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input id="genderless" name="gender" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="genderless" className="ml-3 block text-sm font-medium text-gray-700">
                Genderless
              </label>
            </div>
            <div className="flex items-center">
              <input id="unknown-gender" name="gender" type="radio"
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="unknown-gender" className="ml-3 block text-sm font-medium text-gray-700">
                Unknown
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-3">
          <button className="bg-blue-400 hover:bg-blue-500 hover:shadow border-2 border-transparent text-white font-semibold rounded-md mx-2 px-8 py-3 text-sm">Filter</button>
          <button className="bg-transparent border-2 border-transparent hover:border-gray-400 text-gray-400 font-semibold rounded-md mx-2 px-8 py-3 text-sm">Clear</button>
        </div>
      </div>
    )
  }
}

export default Filter