import React, { Component } from 'react'
import Characters from './components/Characters/Characters'
import Filter from './components/Filter/Filter'
import Toast from './components/Toast/Toast'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      status: '',
      gender: '',
      filter: false
    }

    this.toastRef = React.createRef()
  }

  setFilterData = (filterData, filter) => {
    const { name, status, gender } = filterData
    this.setState({ name, status, gender, filter })
  }

  addToast = (toast) => {
    const toastComponent = this.toastRef.current
    toastComponent.addToast(toast)
  }

  render () {
    const { name, status, gender, filter } = this.state
    const filterData = { name, status, gender, filter }

    return (
      <div className="min-h-screen relative">
        <div className="container mx-auto">
          <img src={logo} className="my-8 h-24 w-auto mx-auto" alt="logo"/>
          <div className="flex flex-row">
            <div className="w-1/4 p-4 mb-4">
              <Filter filterRecords={this.setFilterData}/>
            </div>
            <div className="flex-1 p-4">
              <Characters filterData={filterData} addToast={this.addToast}/>
            </div>
          </div>
        </div>
        <Toast ref={this.toastRef}/>
      </div>
    )
  }
}

export default App
