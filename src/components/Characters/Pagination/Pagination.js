import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pagination extends Component {
  constructor (props) {
    super(props)
    const { perPage, totalRecords } = props

    this.state = {
      currentPage: 1,
      pageNumbers: [1]
    }

    this.totalPages = Math.ceil(totalRecords / perPage)
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages
    const currentPage = this.state.currentPage
    const prevPage = currentPage > 1 ? currentPage - 1 : null
    const nextPage = currentPage < totalPages ? currentPage + 1 : null

    console.log(prevPage)
    console.log(nextPage)
    if (nextPage == null && prevPage == null) {
      return [currentPage]
    } else if (prevPage == null && nextPage < totalPages) {
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

  setCurrentPage = (page) => {
    this.setState({
      currentPage: page
    }, () => this.props.onPageChanged())
  }

  setPerPage = (e) => {
    this.props.onPerPageChanged(parseInt(e.target.value))
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.totalPages = Math.ceil(this.props.totalRecords / this.props.perPage)
      const pageNumbers = this.fetchPageNumbers()
      this.setState({
        pageNumbers
      })
    }

    if (prevProps.toggleFilter !== this.props.toggleFilter) {
      if (this.props.toggleFilter.filter) {
        this.setState({
          currentPage: 1
        })
      }
    }
  }

  render () {
    const { totalRecords, perPage } = this.props
    const { currentPage } = this.state

    const firstRecord = perPage * (currentPage - 1) + 1
    const lastPageRecords = totalRecords % perPage
    let totalRecordsOnPage = 0

    if (currentPage === this.totalPages) {
      totalRecordsOnPage = (perPage * (currentPage - 1)) + lastPageRecords
    } else {
      totalRecordsOnPage = currentPage * perPage
    }
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
                  className="font-semibold mr-4" onChange={this.setPerPage} value={this.props.perPage}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <div className="flex items-center">
            <span
              className="font-semibold text-gray-300">
              Showing {firstRecord} - {totalRecordsOnPage} of {totalRecords}</span>
          </div>
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  perPage: PropTypes.number,
  totalRecords: PropTypes.number,
  onPageChanged: PropTypes.func,
  toggleFilter: PropTypes.bool
}

export default Pagination