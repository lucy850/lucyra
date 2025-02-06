const lirikList = [
    "When I'm with you, time stands still because I feel at home",
    "Love is not about finding someone perfect, but about seeing perfection in imperfection.",
    "I love you not only for who you are but also for who I am when I'm with you.",
    "Love is not about how long we've been together, but how deeply we understand each other.",
    "I don't need a reason to love you, because you are the reason.",
    "Love is when two hearts beat in sync"
];

let lirikIndex = 0; // Indeks untuk melacak lirik yang ditampilkan
const lirikElement = document.getElementById("lirik");

// Fungsi untuk menampilkan karakter satu per satu
function ketikLirik(lirik) {
    let index = 0;
    lirikElement.innerHTML = ''; // Bersihkan lirik sebelumnya
    function tampilkanKarakter() {
        if (index < lirik.length) {
            lirikElement.innerHTML += lirik.charAt(index); // Menambahkan karakter satu per satu
            index++; // Meningkatkan indeks untuk karakter berikutnya
            setTimeout(tampilkanKarakter, 100); // Mengulang fungsi setiap 100ms
        } else {
            // Setelah selesai menampilkan lirik, lanjutkan ke lirik berikutnya setelah delay
            setTimeout(berikutnya, 1000); // Tunggu 1 detik sebelum menampilkan lirik berikutnya
        }
    }
    tampilkanKarakter();
}

// Fungsi untuk mengubah lirik setiap selesai mengetik satu lirik
function berikutnya() {
    if (lirikIndex < lirikList.length) {
        ketikLirik(lirikList[lirikIndex]);
        lirikIndex++; // Pindah ke lirik berikutnya
    }
}

// Mulai dengan lirik pertama saat halaman dimuat
window.onload = berikutnya;






document.getElementById("sebelum").addEventListener("click", function() {
    window.location.href = "date.html"; 
});

