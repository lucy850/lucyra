const carousel = document.querySelector(".carousel-images"); // Pilih container gambar
const totalImages = document.querySelectorAll(".carousel-item").length; // Total gambar yang ada
const imageWidth = document.querySelector(".carousel-item").offsetWidth; // Lebar setiap gambar
const indicators = document.querySelectorAll(".indicator"); // Pilih semua tombol bulat

// Fungsi untuk memperbarui tombol yang aktif
function updateIndicator(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add("active"); // Tombol aktif
        } else {
            indicator.classList.remove("active"); // Tombol non-aktif
        }
    });
}

// Fungsi untuk menggeser gambar sesuai indeks
function moveToImage(index) {
    const shiftAmount = imageWidth * index; // Geser gambar berdasarkan index
    carousel.style.transform = `translateX(-${shiftAmount}px)`; // Pindahkan gambar
    updateIndicator(index); // Perbarui tombol aktif
}

// Menambahkan event listener untuk klik pada tombol bulat
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        moveToImage(index); // Geser gambar sesuai tombol yang diklik
    });
});

// Pastikan gambar pertama tampil di awal
carousel.style.transform = "translateX(0px)";
updateIndicator(0); // Tombol pertama aktif di awal
