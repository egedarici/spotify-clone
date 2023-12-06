import { useSelector, useDispatch } from 'react-redux';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const Playlist = () => {
    /*
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const audio = document.querySelector('#audio');
    const title = document.querySelector('#title');
    const image = document.querySelector('#cover');
    
    let songs;
    const songIndex=0;

    async function retriveSongsFromServer(){
        await fetch(audio.json)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            songs = data.songs;
            loadSong(songs[songIndex]);
        })
        .catch((error) => {
            console.error("There was an error fetching:",error);
        });
    }

    function loadSong(song) {
        title.innerText = song.title;
        audio.src = `${song.audio}`;
        image.computedStyleMap.backgroundimage = `url('${song.cover}')`;
} */
}
export default Playlist;
