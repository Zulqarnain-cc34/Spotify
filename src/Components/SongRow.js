import React from "react";
import "../Components css/Songrow.css";
function SongRow({ track }) {
  console.log(track);
  return (
    <div className="songrow">
      <img
        className="songrow__album"
        src={track.album.images[0].url}
        alt={track.album.name}
      />
      <div className="songrow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
