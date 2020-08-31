import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function App() {
  const spotify = new SpotifyWebApi();
  const [{ playlists, token }, dispatch] = useStateValue();
  console.log(playlists);
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    async function getUser() {
      const user = await spotify.getMe();
      console.log(user.display_name);
      await dispatch({
        type: actionTypes.SET_USER,
        user: user.display_name,
      });
      await dispatch({
        type: actionTypes.SET_TOKEN,
        token: _token,
      });
    }
    async function getUserPlaylist() {
      const playlist = await spotify.getUserPlaylists();
      await dispatch({
        type: actionTypes.SET_PLAYLISTS,
        playlists: playlist,
      });
    }

    if (_token) {
      spotify.setAccessToken(_token);
      getUser();
      getUserPlaylist();
    }
  }, [spotify, dispatch]);
  console.log(playlists);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
