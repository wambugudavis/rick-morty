import React, { Component } from 'react'
import Characters from './components/Characters/Characters'
import Filter from './components/Filter/Filter'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto">
          <img src={logo} className="my-8 h-24 w-auto mx-auto" alt="logo"/>
          <div className="flex flex-row">
            <div className="w-1/4 p-4 mb-4">
              <Filter/>
            </div>
            <div className="flex-1 p-4">
              <Characters/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
