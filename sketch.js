// nilai konstan
const size = 600;
const center = 0; // untuk pusat lingkaran awalnya di 0,0
const radius = 86;
var yHillsBottom = 600 + 90; // posisi awal bukit dibawah (diluar frame)
var yHillsTop = 0 - 90; // posisi awal 
const rate = 4;
var degree = 0;

function setup() {
  createCanvas(size, size); // buat ukuran kotak
}

function draw() {
  var s = second();
  background('#a8d8f1');
  strokeWeight(2); // tebal garis 2px
  // gambar segi enam dengan warna hitam
  // fill('#232323');
  noStroke();
  
  push();
    fill(0);
    polygon(width / 2, width / 2, width / 2, 6);
    translate(width / 2, height / 2); // pindah posisi pusat ke tengah
    rotate(radians(degree)); // putar kelipatan 6
    flowerOfLife(center, radius, 255);
    degree += 1 * rate;
  pop();

  push();
  translate(width / 2, height / 2); // pindah posisi pusat ke tengah
  blendMode("darken");
  gradient(0);
  blendMode(BLEND);
  pop();

  sideDecor(); // dekorasi di kiri

  // dekorasi yang sama tapi dipindah ke kanan bawah dan diputar 180 derajat
  push();
    translate(600, 600);
    rotate(radians(180));
    sideDecor();
  pop();

  // untuk membuat bukit bukit di bawah
  // nilai y bukit bawah akan berkurang sampai 600
  yHillsBottom -= 1 * rate;
  if (yHillsBottom < 600) {
    yHillsBottom = 600;
  }
  for (let i = 0; i < size; i++) {
    hills(i, yHillsBottom);
  }

  // untuk membuat bukit bukit di atas
  // nilai y bukit atas akan bertambah sampai 0
  yHillsTop += 1 * rate;
  if (yHillsTop > 0) {
    yHillsTop = 0;
  }
  for (let i = 0; i < size; i++) {
    hills(i, yHillsTop);
  }

  // membuat text
  fill(0);
  text('Vauwez Sam El Fareez', 10, 20);
  text('2009106054', 10, 35);

}

// fungsi untuk membuat flower of life (lingkaran-lingkaran ditengah)
function flowerOfLife(center, radius, stroke_color) {
  noFill(); // tanpa warna fill
  stroke(stroke_color);
  // kolom tengah, 5 lingkaran saling berpotongan
  // dimana pusat lingkaran yang berdekatan (atas bawah) akan berjarak sebesar radius lingkaran tetangga
  circle(center, center - radius, radius);
  circle(center, center - radius / 2, radius);
  circle(center, center, radius); // pusat semua lingkaran
  circle(center, center + radius / 2, radius);
  circle(center, center + radius, radius);

  // kolom kanan
  circle(center + radius / 2 - radius / 16, center - radius / 2 - radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center - radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center + radius / 4, radius);
  circle(center + radius / 2 - radius / 16, center + radius / 2 + radius / 4, radius);

  // kolom kiri
  circle(center - radius / 2 + radius / 16, center - radius / 2 - radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center - radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center + radius / 4, radius);
  circle(center - radius / 2 + radius / 16, center + radius / 2 + radius / 4, radius);

  // kolom paling kanan
  circle(center + radius - radius / 8, center - radius / 2, radius);
  circle(center + radius - radius / 8, center, radius);
  circle(center + radius - radius / 8, center + radius / 2, radius);

  // kolom paling kiri
  circle(center - radius + radius / 8, center - radius / 2, radius);
  circle(center - radius + radius / 8, center, radius);
  circle(center - radius + radius / 8, center + radius / 2, radius);

  noStroke();
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
  if (y <= 0) {
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

// fungsi untuk menghasilkan linear gradient yang melingkar
function gradient(start) {
  colorMode(HSB,360,100,100,100);

  for (let i=0; i<=360; i+=0.5) { // loop r
    push();
    rotate(radians(i));
    
    stroke(i, 100, 100);
    line(start, start, (start+width*sqrt(2))/2, start);
    pop();
    //deg+=0.1;
  }
  colorMode(RGB, 255);
}
