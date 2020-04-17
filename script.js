const embed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=$PLAYLIST_ID&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>';

const classicalMusic = [
    { src: 'PLUnZiuKlRo9lzhcHvz6EwANqpGHHCKCge', title: 'Classical' },
    { src: 'PLUnZiuKlRo9nWGwjcAKxGn_rk1rwsxOr6', title: 'Orchestral' }
];

const alternativeMusic = [
    { src: 'PLUnZiuKlRo9mxP52lqHoMqO1hC48gPTlQ', title: 'Nightstep' },
    { src: 'PLUnZiuKlRo9loiN8103ldXrNy8kCYUCts', title: 'Fantasy' }
];

let jukebox;
let music = [...classicalMusic, ...alternativeMusic];

document.addEventListener('load', () => {
    generateButtons();
})

function generateButtons() {
    const jukebox = document.getElementById('jukebox');
    jukebox.innerHTML = '';

    for (const button of music) {
        const element = document.createElement('button');

        element.innerText = button.title;
        element.addEventListener('click', () => embedPlaylist(button.src));
        jukebox.appendChild(element);
    }
}

function selectCheckbox(event) {
    const target = event.target;

    if (target.id === 'alternative_check' && target.checked) {
        music = [...music, ...alternativeMusic];
    } else if (target.id === 'alternative_check') {
        music = music.filter((element) => !alternativeMusic.includes(element));
    }

    if (target.id === 'classical_check' && target.checked) {
        music = [...music, ...classicalMusic];
    } else if (target.id === 'classical_check') {
        music = music.filter((element) => !classicalMusic.includes(element));
    }

    generateButtons();
}

function embedPlaylist(id) {
    const playlist = embed.replace('$PLAYLIST_ID', id);
    const player = document.getElementById('player');
    player.innerHTML = playlist;
}