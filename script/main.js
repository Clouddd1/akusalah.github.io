document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('myAudio');
    const maafOption = document.getElementById('maafOption');
    const apologyMessage = document.querySelector('.apology-message');

    // Gantilah 'music/heri.mp3' dengan path yang sesuai ke file musik Anda
    audio.src = 'music/heri.mp3';

    // Mulai memutar musik secara otomatis
    audio.play();

    // Tambahkan event listener untuk menangani pilihan pengguna
    maafOption.addEventListener('change', function () {
        const chosenOption = maafOption.value;
        if (chosenOption === 'ya') {
            apologyMessage.textContent = 'Terima kasih sudah memaafkanku. Aku sayang kamu ❤️';
        } else {
            apologyMessage.textContent = 'Gapapa, aku akan berusaha lebih baik. Aku sayang kamu ❤️';
        }
    });
});
