import makeRequest from './makeRequest'

// make async calls to api-endpoints to "new-releases", "featured-playlists" , "categories" endpoinst


export const  newReleases = async () => {
    const data = await makeRequest('new-releases')
    return data

}

export const featuredPlaylist = async () => {
    const data = await makeRequest('featured-playlists')
    return data
}

export const categories = async () => {
    const data = await makeRequest('categories')
    return data
}