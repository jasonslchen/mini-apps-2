import React from 'react';
import axios from 'axios';
import EventsList from './eventsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQueryPage: 1,
      currentQueryPageEvents: [],
      searchQuery: '',
    };
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.retrieveEvents = this.retrieveEvents.bind(this);
    this.searchForQuery = this.searchForQuery.bind(this);
  }

  retrieveEvents(query, page) {
    axios.get(`/events?q=${query}&_page=${page}`)
      .then((data) => {
        this.setState({
          currentQueryPageEvents: data.data,
        });
      })
      .catch((error) => {
        console.log('There was error with retrieving data ', error);
      });
  }

  handleSearchQuery() {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  searchForQuery(event) {
    event.preventDefault();
    const { searchQuery, currentQueryPage } = this.state;
    this.retrieveEvents(searchQuery, currentQueryPage);
  }

  render() {
    const { currentQueryPageEvents } = this.state;
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
      </div>
    );
  }
}

export default App;
