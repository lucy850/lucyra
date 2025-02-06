let anniversaryDate = new Date(2023, 6, 20, 12, 0, 0); // Contoh: 1 Januari 2023, 12:00

function updateTime() {
    let now = new Date();
    let diff = now - anniversaryDate;

    // Hitung lama jadian dalam hari, jam, menit, detik
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("dateDisplay").innerHTML = `Jadian: ${anniversaryDate.toDateString()} ${anniversaryDate.toLocaleTimeString()}`;
    document.getElementById("timeDisplay").innerHTML = `Hari ini: ${now.toDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById("durationDisplay").innerHTML = `Sudah jadian selama: ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik ❤️`;
}

setInterval(updateTime, 1000);
updateTime();

// Tombol next pindah halaman


document.getElementById("ourJourney").addEventListener("click", function () {
    window.location.href = "our-journey.html"; // Ganti dengan halaman tujuan
});

document.getElementById("nextBtn").addEventListener("click", function () {
    window.location.href = "tentang.html"; // Ganti dengan halaman tujuan
});