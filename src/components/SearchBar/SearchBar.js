import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };
    this.search=this.search.bind(this);
    this.handleTermChange=this.handleTermChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleTermChange(e){
      this.setState({term: e.target.value});
  }
  search(){
    this.props.onSearch(this.state.term);
  }

  handleKeyDown(e){
    if(e.keyCode === 13){
    this.search();
    }
  }
  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"  onChange={this.handleTermChange} onKeyDown = {this.handleKeyDown}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }

}

export default SearchBar;
