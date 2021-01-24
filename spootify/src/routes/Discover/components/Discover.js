import React, { Component } from 'react';
import {newReleases, featuredPlaylist, categories } from '../api'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';



/**
 * use componentDidMount to make api calls 
 * set all state simultaneously in one block to get uniform rendering of all segments
 * extract data to the images and name
 *  
 */
export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  async componentDidMount() {
    console.log('start')
    const newReleaseData = await newReleases()
    const newPlaylistData = await featuredPlaylist()
    const newCategories = await categories()
    this.setState({
      newReleases: newReleaseData.data.albums.items,
      playlists: newPlaylistData.data.playlists.items,
      categories: newCategories.data.categories.items
    })
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
