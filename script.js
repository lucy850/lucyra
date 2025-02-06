let passcodeInput = document.getElementById("passcode");
let correctPasscode = "200723"; // Ganti dengan kode yang diinginkan

function tambahAngka(angka) {
    if (passcodeInput.value.length < 6) { // Batasan 4 digit
        passcodeInput.value += angka;
    }
}

function hapus() {
    passcodeInput.value = passcodeInput.value.slice(0, -1);
}

function cekPasscode() {
    if (passcodeInput.value === correctPasscode) {
        Swal.fire({
            title: "YEYYY BETULLL!✅ ",
            text: "Mengalihkan ke halaman berikutnya...",
            icon: "success",
            timer: 2000, // Tunggu 2 detik sebelum pindah
            showConfirmButton: false
        }).then(() => {
            window.location.href = "about.html"; // Arahkan ke halaman lain
        });
    } else {
        Swal.fire({
            title: "Parah kamu lupa!?",
            text: "Coba aja terus",
            icon: "error",
            confirmButtonColor: "#e757e7c2",
            confirmButtonText: "OK"
        });
        passcodeInput.value = ""; // Kosongkan input
    }
}

