// nilai konstan
const size = 600;
const center = size / 2;
const radius = 86;

// deklarasi variabel img
let img;

function setup() {
  createCanvas(size, size); // buat ukuran kotak
  background('#a8d8f1');
  noLoop(); // supaya tidak loop karena tidak perlu
  img = createImage(300, 200);
  img.loadPixels();
  img.setFrame
}

function draw() {
  // gambar segi enam dengan warna hitam
  fill('#232323');
  noStroke();
  polygon(center, center, 300, 6);

  strokeWeight(2); // tebal garis 2px
  stroke('#73d245');
  noFill(); // tanpa warna fill
  // kolom tengah, 5 lingkaran saling berpotongan
  // dimana pusat lingkaran yang berdekatan (atas bawah) akan berjarak sebesar radius lingkaran tetangga
  circle(center, center - radius, radius);
  circle(center, center - radius / 2, radius);
  circle(center, center, radius); // pusat semua lingkaran
  circle(center, center + radius / 2, radius);
  circle(center, center + radius, radius);

  stroke('#3283cc');
  // kolom kanan
  circle(center + radius / 2 - radius / 16, center - radius / 2 - radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center - radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center + radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center + radius / 2 + radius / 4, radius);

  stroke('#d61b3a');
  // kolom kiri
  circle(center - radius / 2 + radius / 16, center - radius / 2 - radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center - radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center + radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center + radius / 2 + radius / 4, radius);

  stroke('#f618af');
  // kolom paling kanan
  circle(center + radius - radius / 8, center - radius / 2, radius);
  circle(center + radius - radius / 8, center, radius);
  circle(center + radius - radius / 8, center + radius / 2, radius);

  stroke('#d6d226');
  // kolom paling kiri
  circle(center - radius + radius / 8, center - radius / 2, radius);
  circle(center - radius + radius / 8, center, radius);
  circle(center - radius + radius / 8, center + radius / 2, radius);

  sideDecor(); // dekorasi di kiri bawah

  translate(600 - 60, 0); // pindah nilai 0 sumbu x ke 600-60
  sideDecor(); // dekorasi di kanan atas

  // translate(0, 300); // pindah nilai 0 sumbu y ke 300
  // sideDecor(); // dekorasi di kanan bawah

  translate(-600 + 60, 0); // reset posisi translasi

  // untuk membuat bukit bukit di bawah
  for (let i = 0; i < size; i++) {
    hills(i, 600);
  }

  // untuk membuat bukit bukit di atas
  for (let i = 0; i < size; i++) {
    hills(i, 0);
  }

  // membuat text
  fill(0);
  text('Vauwez Sam El Fareez', 10, 20);
  text('2009106054', 10, 35);

}

// fungsi untuk membuat polygon
function polygon(x, y, radius, npoints) {
  const angle = TWO_PI / npoints;
  beginShape();
  for (let i = 0; i < TWO_PI; i += angle) {
    var sx = x + cos(i) * radius;
    var sy = y + sin(i) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// fungsi untuk membuat dekorasi warna di pinggir
function sideDecor() {
  noStroke();

  // bentuk warna pink
  fill('#f766b8');
  beginShape();
  vertex(0, 0);
  vertex(60, 0);
  vertex(60, 600);
  vertex(0, 600);
  endShape(CLOSE);

  // bentuk warna merah
  fill('#f42a27');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19 - 23 - 41);
  vertex(60, 0);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34 + 49);
  vertex(60, 600);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19 + 23 + 41);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19 + 23);
  endShape(CLOSE);

  // bentuk warna oren cerah
  fill('#e1c888');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19 - 23);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30 - 34 - 49);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34 + 49);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19 + 23);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19);
  endShape(CLOSE);

  // bentuk warna oren 
  fill('#e9824a');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30 - 34);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30); 
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14);
  endShape(CLOSE);

  // bentuk warna oren 
  fill('#e9824a');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14 - 19);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30 - 34);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30 + 34);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14 + 19);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14);
  endShape(CLOSE);

  // bentuk warna kuning
  fill('#f5c74c');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16 - 14);
  vertex(60, 300 - 42 - 48 - 35 - 30 - 30);
  vertex(60, 300 + 42 + 48 + 35 + 30);
  vertex(60, 300 + 42 + 48 + 35 + 30 + 30);
  vertex(0, 300 + 95 + 26 + 18 + 16 + 14);
  vertex(0, 300 + 95 + 26 + 18 + 16);
  endShape(CLOSE);

  // bentuk warna kuning hijau
  fill('#d4df3e');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18 - 16);
  vertex(60, 300 - 42 - 48 - 35 - 30);
  vertex(60, 300 + 42 + 48 + 35);
  vertex(60, 300 + 42 + 48 + 35 + 30);
  vertex(0, 300 + 95 + 26 + 18 + 16);
  vertex(0, 300 + 95 + 26 + 18);
  endShape(CLOSE);

  // bentuk warna hijau
  fill('#71d044');
  beginShape();
  vertex(0, 300 - 95 - 26 - 18);
  vertex(60, 300 - 42 - 48 - 35);
  vertex(60, 300 + 42 + 48);
  vertex(60, 300 + 42 + 48 + 35);
  vertex(0, 300 + 95 + 26 + 18);
  vertex(0, 300 + 95 + 26);
  endShape(CLOSE);

  // bentuk warna biru muda
  fill('#19c3ec');
  beginShape();
  vertex(0, 300 - 95 - 26);
  vertex(60, 300 - 42 - 48);
  vertex(60, 300 + 42);
  vertex(60, 300 + 42 + 48);
  vertex(0, 300 + 95 + 26);
  vertex(0, 300 + 95);
  endShape(CLOSE);

  // bentuk warna biru
  fill('#166fcc');
  beginShape();
  vertex(0, 300 - 55);
  vertex(0, 300 - 95);
  vertex(60, 300 - 42);
  vertex(60, 300);
  vertex(60, 300 + 42);
  vertex(0, 300 + 95);
  vertex(0, 300 + 55);
  vertex(31, 300);
  endShape(CLOSE);

  // bentuk warna ungu
  fill('#4739b6');
  beginShape();
  vertex(0, 300 - 55);
  vertex(31, 300);
  vertex(0, 300 + 55);
  vertex(0, 300 + 9);
  vertex(9, 300);
  vertex(0, 300 - 9);
  endShape(CLOSE);

  // bentuk warna pink
  fill('#7f629d');
  beginShape();
  vertex(0, 300 - 9);
  vertex(9, 300);
  vertex(0, 300 + 9);
  endShape(CLOSE);
}

// fungsi untuk me-generate gambar gelombang untuk bukit
function hills(x, y) {
  var b = -16 - 50 * noise(x / 40); // nilai random untuk mengatur tinggi (y) pada bukit belakang
  var c = -15 - 41 * noise(x / 75); // nilai random untuk mengatur tinggi (y) pada bukit tengah
  var d = -10 - 100 * noise(x / 86); // nilai random untuk mengatur tinggi (y) pada bukit depan
  console.log(b, c, d);

  // jika y bernilai 0 ubah nilai nya menjadi positif
  // sehingga nilai randomnya akan ke arah bawah
  // digunakan untuk membuat bukit diatas
  if (y === 0) {
    b = b * -1;
    c = c * -1;
    d = d * -1;
  }

  // bukit hijau
  stroke('#389b2d');
  line(x, y, x, y + d);

  // bukit pink
  stroke('#f359ad');
  line(x, y, x, y + c);

  // bukit abu-abu
  stroke('#bab6b5');
  line(x, y, x, y + b);
}

