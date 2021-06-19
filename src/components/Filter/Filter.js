import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Filter extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      status: '',
      gender: ''
    }
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    this.props.filterRecords(this.state, true)
    event.preventDefault()
  }

  resetFilters = () => {
    this.setState({
      name: '',
      status: '',
      gender: ''
    })
    this.props.filterRecords(this.state, false)
  }

  render () {
    return (
      <div className="card">
        <div className="mb-8">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
          <input type="text" name="name" id="name" autoComplete="off"
                 className="focus:outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                 value={this.state.name} onChange={this.handleChange}/>
        </div>

        <div className="mb-8">
          <label htmlFor="status" className="block text-lg font-semibold text-gray-800">Status</label>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input id="all" name="status" type="radio" onChange={this.handleChange} value=""
                     checked={this.state.status === ''}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="all" className="ml-3 block text-sm font-medium text-gray-700">
                All
              </label>
            </div>
            <div className="flex items-center">
              <input id="alive" name="status" type="radio" onChange={this.handleChange} value="alive"
                     checked={this.state.status === 'alive'}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="alive" className="ml-3 block text-sm font-medium text-gray-700">
                Alive
              </label>
            </div>
            <div className="flex items-center">
              <input id="dead" name="status" type="radio" onChange={this.handleChange} value="dead"
                     checked={this.state.status === 'dead'}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="dead" className="ml-3 block text-sm font-medium text-gray-700">
                Dead
              </label>
            </div>
            <div className="flex items-center">
              <input id="unknown" name="status" type="radio" onChange={this.handleChange} value="unknown"
                     checked={this.state.status === 'unknown'}
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
              <input id="all-gender" name="gender" type="radio" onChange={this.handleChange} value=""
                     checked={this.state.gender === ''}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="all-gender" className="ml-3 block text-sm font-medium text-gray-700">
                All
              </label>
            </div>
            <div className="flex items-center">
              <input id="female" name="gender" type="radio" onChange={this.handleChange} value="female"
                     checked={this.state.gender === 'female'}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input id="male" name="gender" type="radio" onChange={this.handleChange} value="male"
                     checked={this.state.gender === 'male'}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input id="genderless" name="gender" type="radio" onChange={this.handleChange} value="genderless"
                     checked={this.state.gender === 'genderless'}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="genderless" className="ml-3 block text-sm font-medium text-gray-700">
                Genderless
              </label>
            </div>
            <div className="flex items-center">
              <input id="unknown-gender" name="gender" type="radio" onChange={this.handleChange} value="unknown"
                     checked={this.state.gender === 'unknown'}
                     className="focus:ring-blue-400 h-5 w-5 text-blue-400"/>
              <label htmlFor="unknown-gender" className="ml-3 block text-sm font-medium text-gray-700">
                Unknown
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-3">
          <button
            className="bg-blue-400 hover:bg-blue-500 hover:shadow border-2 border-transparent text-white font-semibold rounded-md mx-2 px-8 py-3 text-sm"
            onClick={this.handleSubmit}
          >Filter
          </button>
          <button
            className="bg-transparent border-2 border-transparent hover:border-gray-400 text-gray-400 font-semibold rounded-md mx-2 px-8 py-3 text-sm"
            onClick={this.resetFilters}
          >Clear
          </button>
        </div>
      </div>
    )
  }
}

Filter.propTypes = {
  filterRecords: PropTypes.func,
}

export default Filter