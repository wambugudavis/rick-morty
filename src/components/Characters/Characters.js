import React, { Component } from 'react'
import axios from 'axios'
import Character from './Character/Character'
import Pagination from './Pagination/Pagination'
import PropTypes from 'prop-types'

class Characters extends Component {

  constructor (props) {
    super(props)
    this.paginationRef = React.createRef()
    this.state = {
      characters: [],
      totalRecords: 0,
      perPage: 5
    }
  }

  fetchNextPage = () => {
    if (this.props.filterData.filter) {
      this.fetchFilteredPage()
    } else {
      this.fetchNewPage()
    }
  }

  fetchNewPage = () => {
    const pageData = this.paginationRef.current
    const range = [...Array(pageData.state.perPage).keys()].map(i => i + 1 + pageData.state.perPage * (pageData.state.currentPage - 1))
    axios.get('https://rickandmortyapi.com/api/character/' + range)
      .then((response) => {
        this.setState({
          characters: response.data
        })
      })
  }

  fetchFilteredPage = () => {
    const name = this.props.filterData.name !== '' ? '&name=' + this.props.filterData.name : ''
    const gender = this.props.filterData.gender !== '' ? '&gender=' + this.props.filterData.gender : ''
    const status = this.props.filterData.status !== '' ? '&status=' + this.props.filterData.status : ''
    const pageData = this.paginationRef.current
    const page = pageData.state.currentPage

    axios.get('https://rickandmortyapi.com/api/character/?page=' + page + name + gender + status)
      .then((response) => {
        console.log(response.data)
        this.setState({
          totalRecords: response.data.info.count,
          characters: response.data.results,
          perPage: 20
        })
      })
  }

  setPerPage = (perPage) => {
    this.setState({ perPage })
  }

  componentDidMount () {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        this.fetchNewPage()
        this.setState({
          totalRecords: response.data.info.count
        })
      })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.filterData !== this.props.filterData) {
      this.fetchFilteredPage()
    }
  }

  render () {
    const { state } = this
    return (
      <div className="card ">
        <h1 className="text-2xl font-semibold">Characters {this.state.currentPage}</h1>
        <p className="my-4 text-gray-400">More than 400+ characters</p>

        <div className="flex flex-col py-4">
          <div className="grid grid-cols-6 py-4 px-6 font-semibold text-gray-400 uppercase bg-rm-gray rounded-lg">
            <div className="col-span-3 text-gray-600">Character</div>
            <div>Gender</div>
            <div>Species</div>
            <div>Status</div>
          </div>
        </div>

        {
          state.characters.length !== 0 ?
            state.characters.map((character, index) => {
              return (
                <Character key={index} character={character}/>
              )
            }) :
            <div className="text-center text-gray-400 py-4">
              <p>No characters found!</p>
            </div>
        }

        <Pagination
          ref={this.paginationRef}
          perPage={this.state.perPage}
          totalRecords={this.state.totalRecords}
          onPageChanged={this.fetchNextPage}
          onPerPageChanged={this.setPerPage}
        />
      </div>
    )
  }
}

Characters.propTypes = {
  filterData: PropTypes.object,
}

export default Characters