export const savePlaylistsInLocalStorage = (playlists) => {
    deletePlaylistsFromLocalStorage();
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }
  
export const deletePlaylistsFromLocalStorage = () => {
    localStorage.removeItem('playlists');
  }

export const getPlaylistsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('playlists'));
  }

export const filtrarePlaylistByName = (name) => {
    
    const playlists = getPlaylistsFromLocalStorage()
    return playlists.filter(obj => obj.name.includes(name));
  }