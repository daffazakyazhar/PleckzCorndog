// Fungsi untuk menampilkan pesan saat tombol diklik (misalnya, di halaman Home)
function showMessage() {
  alert("Terima kasih! Pesanan Anda akan diproses.");
}

// Fungsi untuk menangani submit formulir delivery
function submitForm() {
  // Mencegah form submit default (untuk demo; ganti dengan logika backend)
  event.preventDefault();  // Tambahkan ini jika menggunakan event listener
  
  // Ambil data dari form (contoh sederhana)
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const order = document.getElementById('order').value;
  
  // Validasi sederhana
  if (!name || !phone || !address || !order) {
    alert("Harap isi semua field yang wajib!");
    return;
  }
  
  // Simulasi pengiriman (ganti dengan fetch() untuk kirim ke server)
  alert(`Pesanan delivery untuk ${name} telah dikirim! Kami akan menghubungi Anda di ${phone}.`);
  
  // Reset form setelah submit
  document.getElementById('delivery-form').reset();
}

// Jika ingin menambahkan event listener untuk form (lebih robust)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('delivery-form');
  if (form) {
    form.addEventListener('submit', submitForm);
  }
});
// Fungsi untuk slideshow di gallery-detail
let currentSlide = 0;
const slides = [
  { src: 'images/gallery1-placeholder.jpg', caption: 'Corndog di Toko - Nikmati suasana toko kami yang nyaman.' },
  { src: 'images/gallery2-placeholder.jpg', caption: 'Proses Pembuatan - Lihat bagaimana corndog kami dibuat dengan bahan segar.' },
  { src: 'images/gallery3-placeholder.jpg', caption: 'Pelanggan Senang - Testimoni dari pelanggan puas.' },
  { src: 'images/gallery4-placeholder.jpg', caption: 'Varian Rasa - Eksplorasi berbagai rasa corndog kami.' }
];

function showSlide(index) {
  const img = document.getElementById('slide-image');
  const caption = document.getElementById('slide-caption');
  if (img && caption) {
    img.src = slides[index].src;
    caption.textContent = slides[index].caption;
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Inisialisasi slideshow saat halaman load
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('slide-image')) {
    showSlide(currentSlide);
  }
});

// Fungsi lainnya tetap ada (showMessage, submitForm)