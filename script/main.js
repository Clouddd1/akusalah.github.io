document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('myAudio');
    const yaButton = document.getElementById('yaButton');
    const tidakButton = document.getElementById('tidakButton');
    const yaResponse = document.getElementById('yaResponse');
    const tidakResponse = document.getElementById('tidakResponse');
    const responseContainer = document.querySelector('.response-container');
    const apologyMessage = document.querySelector('.apology-message');

    // Gantilah 'music/heri.mp3' dengan path yang sesuai ke file musik Anda
    audio.src = 'music/heri.mp3';

    // Tambahkan event listener untuk tombol "Ya"
    yaButton.addEventListener('click', function () {
        yaResponse.style.display = 'block';
        tidakResponse.style.display = 'none';
        apologyMessage.style.display = 'none';
        responseContainer.style.display = 'block';
        audio.play(); // Play audio saat tombol "Ya" diklik
    });

    // Tambahkan event listener untuk tombol "Tidak"
    tidakButton.addEventListener('click', function () {
        yaResponse.style.display = 'none';
        tidakResponse.style.display = 'block';
        apologyMessage.style.display = 'none';
        responseContainer.style.display = 'block';
        audio.play(); // Play audio saat tombol "Tidak" diklik
    });
});
