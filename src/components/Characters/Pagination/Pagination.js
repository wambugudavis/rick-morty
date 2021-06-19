import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pagination extends Component {
  constructor (props) {
    super(props)
    const { totalRecords = null, perPage = 30 } = props

    this.pageLimit = typeof perPage === 'number' ? perPage : 30
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit)

    this.state = { currentPage: 1 }
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages
    const currentPage = this.state.currentPage
    const prevPage = currentPage > 1 ? currentPage - 1 : null
    const nextPage = currentPage < totalPages ? currentPage + 1 : null

    if (prevPage == null && nextPage < totalPages) {
      return [currentPage, nextPage, nextPage + 1]
    } else if (nextPage == null && prevPage > 1) {
      return [prevPage - 1, prevPage, currentPage]
    } else {
      return [prevPage, currentPage, nextPage]
    }
  }

  renderFirstPageButton () {
    if (this.state.currentPage === 1) {
      return (
        <div className="pagination navigation disabled">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
          </svg>
        </div>
      )
    } else {
      return (
        <div className="pagination navigation" onClick={() => {this.setCurrentPage(1)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
          </svg>
        </div>
      )
    }
  }

  renderPreviousPageButton () {
    if (this.state.currentPage === 1) {
      return (
        <div className="pagination navigation disabled">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </div>
      )
    } else {
      return (
        <div className="pagination navigation" onClick={() => {this.setCurrentPage(this.state.currentPage - 1)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </div>
      )
    }
  }

  renderLastPageButton () {
    if (this.state.currentPage === this.totalPages) {
      return (
        <div className="pagination navigation disabled">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
          </svg>
        </div>
      )
    } else {
      return (
        <div className="pagination navigation" onClick={() => {this.setCurrentPage(this.totalPages)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
          </svg>
        </div>
      )
    }
  }

  renderNextPageButton () {
    if (this.state.currentPage === this.totalPages) {
      return (
        <div className="pagination navigation disabled">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      )
    } else {
      return (
        <div className="pagination navigation" onClick={() => {this.setCurrentPage(this.state.currentPage + 1)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      )
    }
  }

  setCurrentPage (page) {
    this.setState({
      currentPage: page
    }, () => this.props.onPageChanged(page))
  }

  render () {
    return (
      <div className="mt-5 flex flex-row justify-between items-center">
        <div className="grid grid-cols-7 gap-3">
          {this.renderFirstPageButton()}
          {this.renderPreviousPageButton()}
          {
            this.fetchPageNumbers().map((page, index) => {
              if (page != null) {
                if (page === this.state.currentPage) {
                  return (
                    <div className="pagination page active" key={index}>
                      {page}
                    </div>
                  )
                } else {
                  return (
                    <div className="pagination page" key={index} onClick={() => {this.setCurrentPage(page)}}>
                      {page}
                    </div>
                  )
                }
              } else {
                return null
              }
            })
          }
          {this.renderNextPageButton()}
          {this.renderLastPageButton()}
        </div>
        <div className="flex flex-row items center">
          <select id="country" name="country" autoComplete="country"
                  className="font-semibold mr-4">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
          <div className="flex items-center">
            <span className="font-semibold text-gray-300">Showing 1-50 of 235</span>
          </div>
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  onPageChanged: PropTypes.func
}

export default Pagination