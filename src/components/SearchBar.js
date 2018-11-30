import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Youtube Search</label>
            <input
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;