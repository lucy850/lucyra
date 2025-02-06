const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu'). onclick = () => {
    navbarNav.classList.toggle('active');
};

const menu = document.querySelector('#menu');
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !menu.contains(e.target)) {
        navbarNav.classList.remove('active');
    }    
});


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// Buat canvas full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Set ukuran awal

// Fungsi menggambar bentuk hati halus
function drawHeart(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    
    for (let t = 0; t < Math.PI * 2; t += 0.01) {
        let heartX = 16 * Math.pow(Math.sin(t), 3);
        let heartY = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        
        ctx.lineTo(x + heartX * size, y - heartY * size);
    }
    
    ctx.closePath();
    ctx.fill();
}

// Fungsi menggambar animasi + teks
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar banyak hati kecil random sebagai animasi
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 2 + 1;
        drawHeart(x, y, size, "#e757e7c2");
    }

    // Gambar hati utama di tengah
    drawHeart(canvas.width / 2, canvas.height / 2, 10, "#e757e7c2");

    // Tulis teks "Do you love me?" di tengah hati
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Do you love me?", canvas.width / 2, canvas.height / 2);
}

setInterval(draw, 500); // Animasi berjalan terus

// Event saat tombol "Yes" ditekan
document.getElementById("yesBtn").addEventListener("click", function () {
    alert("Yay! I love you too! ❤️");
});

// Event tombol "No" kabur terus
document.getElementById("noBtn").addEventListener("mouseover", function () {
    var btn = this;
    var maxX = window.innerWidth - btn.offsetWidth;
    var maxY = window.innerHeight - btn.offsetHeight;
    btn.style.position = "absolute";
    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";
});


function animateCanvas() {
    draw();
    requestAnimationFrame(animateCanvas);
}

setInterval(draw, 100);

let popup = document.getElementById("lovePopup");
        let nextBtn = document.getElementById("nextBtn");
        let photoCarousel = document.getElementById("photoCarousel");

        document.getElementById("yesBtn").addEventListener("click", function () {
            popup.classList.add("active");
            photoCarousel.style.visibility = "visible"; // Tampilkan foto carousel (ubah visibility)
        });

       

        nextBtn.addEventListener("click", function () {
            window.location.href = "tentang.html"; // Ganti dengan URL halaman yang dituju
        });



        document.getElementById("noBtn").addEventListener("mouseover", function () {
            var btn = this;
            var maxX = window.innerWidth - btn.offsetWidth;
            var maxY = window.innerHeight - btn.offsetHeight;
            btn.style.position = "absolute";
            btn.style.left = Math.random() * maxX + "px";
            btn.style.top = Math.random() * maxY + "px";
        });




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
        document.getElementById("nextBtn").addEventListener("click", function () {
            window.location.href = "nextpage.html"; // Ganti dengan halaman tujuan
        });