import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList'
import './PlayList.css';
class PlayList extends Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  render(){
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList
        tracks={this.props.playlistTracks}
        onRemove={this.props.onRemove}
        isRemoval={true}
        onChange = {this.handleNameChange}/>

        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }

  handleNameChange(e){
    const newPlaylistName = e.target.value;
    this.props.onNameChange(newPlaylistName);
  }

}
export default PlayList;
