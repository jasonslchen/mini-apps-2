import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import EventsList from './eventsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQueryPage: 1,
      currentQueryPageEvents: [],
      searchQuery: '',
      pageCount: 0,
    };
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.retrieveEvents = this.retrieveEvents.bind(this);
    this.searchForQuery = this.searchForQuery.bind(this);
    this.pageClick = this.pageClick.bind(this);
  }

  retrieveEvents(query, page) {
    axios.get(`/events?q=${query}&_page=${page}`)
      .then((data) => {
        this.setState({
          currentQueryPageEvents: data.data,
          pageCount: data.headers['x-total-count'],
        });
      })
      .catch((error) => {
        console.log('There was error with retrieving data ', error);
      });
  }

  handleSearchQuery(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  searchForQuery(event) {
    event.preventDefault();
    const { searchQuery, currentQueryPage } = this.state;
    this.retrieveEvents(searchQuery, currentQueryPage);
  }

  pageClick(event) {
    const page = event.selected;
    const { searchQuery } = this.state;
    this.setState({
      currentQueryPage: page + 1,
    });
    this.retrieveEvents(searchQuery, page + 1);
  }

  render() {
    const { currentQueryPageEvents, pageCount } = this.state;
    return (
      <div>
        <div>Historical Events Finder</div>
        <div>
          <div>
            <label>
            Search for Historic Events:
            </label>
            <input onChange={this.handleSearchQuery} type="text" id="search" />
          </div>
          <button type="button" onClick={this.searchForQuery}>Search!</button>
        </div>
        <EventsList events={currentQueryPageEvents} />
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          onPageChange={this.pageClick}
        />
      </div>
    );
  }
}

export default App;
