import React from 'react'

export default function SaveToSpotify() {
  
  const AddToPlaylist = () => {
    return '<h1>Added to Playlist</h1>';
  }

  return (
    <div>
        <button onClick={AddToPlaylist}>+</button>
    </div>

  )

}
