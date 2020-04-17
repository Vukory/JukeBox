const embed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=$PLAYLIST_ID&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>';

function embedPlaylist(id) {
    let playlist = embed.replace('$PLAYLIST_ID', id);

    let player = document.getElementById("player");
    player.innerHTML = playlist;

}