const sounds = [
    { name: 'Applause', src: 'cheering-and-clapping-crowd-1-5995.mp3' },
    { name: 'Boo', src: 'boo-6377.mp3' },
    { name: 'Film muet', src: 'cinematic-music-sketches-11-cinematic-percussion-sketch-116186.mp3' },
    { name: 'Comedy Show', src: 'Comedy Show.mp3' },
    { name: 'Meuh', src: 'Meuh.mp3' },
    { name: 'Il est tombé', src: 'il-est-tombe-By-Tuna.mp3' },
    { name: 'Ballon kick', src: 'soccer-ball-kick-37625.mp3' },
    { name: 'Sifflet', src: 'sf_sifflet_06.mp3' },

];

document.addEventListener('DOMContentLoaded', () => {
    const soundboard = document.getElementById('soundboard');

    sounds.forEach(sound => {
        const button = document.createElement('button');
        button.className = 'button';
        button.innerText = sound.name;

        button.addEventListener('click', () => {
            const audio = new Audio(sound.src);
            audio.play();
        });

        soundboard.appendChild(button);
    });
});
