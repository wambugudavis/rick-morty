import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toast extends Component {

  state = {
    toasts: []
  }

  addToast = (toast) => {
    const toasts = this.state.toasts
    toasts.push(toast)
    this.setState({
      toasts
    }, () => {
      setTimeout(() => {
        if (this.state.toasts.length > 0) {
          this.clearToast()
        }
      }, 5000)
    })
  }

  clearToast = () => {
    const errors = this.state.toasts
    errors.shift()
    console.log(errors)
    this.setState({
      errors
    })
  }

  render () {
    return (
      <div className="h-screen fixed inset-0 pointer-events-none">
        <div className="container mx-auto mt-20 flex justify-end">
          <div className="flex flex-col">
            {
              this.state.toasts.map((error, index) => {
                return (
                  <div
                    key={index}
                    className="bg-red-500 bg-opacity-40 text-red-900 w-1/4 my-2 p-6 shadow-lg rounded-md flex flex-row w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="ml-4">{error}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Toast